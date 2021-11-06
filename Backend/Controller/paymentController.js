const Razorpay = require("razorpay")
require('dotenv').config()
const uniqId = require('uniqid');
const orderSchema = require("../models/orderSchema");
const Formidable = require("formidable");
const { request } = require("express");
const crypto = require('crypto');
let orderId;
var instance = new Razorpay({
              key_id:process.env.KEY_ID
              ,key_secret:process.env.KEY_SECRET})
exports.paymentOrder = (req,res)=>{
     var  options = {
         amount:500000,
         currency:"INR",
         receipt:uniqId(),
     };
     instance.orders.create(options,(err,order)=>{
         if(err)
         { console.log(err);
            return  res.status(500).json({message:err})
         }
         orderId = order.id;
         res.json(order);
         console.log(order);
     });
}
exports.paymentCallback = (req,res)=>{
    const form = Formidable();
    form.parse(req,(err,fields,files)=>{
        if(fields)
        {
            console.log("FIELDS",fields);
            const hash = crypto.createHmac("sha256",process.env.key_secret)
            .update(orderId+"|"+fields.razorpay_payment_id)
            .digest("hex");
            if (fields.razorpay_signature===hash)
            {
                const info = {
                    _id:fields.razorpay_payment_id,
                    razorpay_order_id:fields.razorpay_order_id,
                };
                const order = new orderSchema({
                    _id:info._id,
                    orders:fields.razorpay_order_id,
                });
                order.save((err,data)=>{
                    if(err){
                        res.status(400).json({
                            error:"Not able to save in Db",
                        });
                    }else{
                        res.redirect(`http://localhost:3000/payment/status/${fields.razorpay_payment_id}`
                        );
                    }
                });
            }
            else{
                res.send("Error");
            }
        }

    }
    )
}
exports.getPayment = (req,res)=>{
    orderSchema.findById(req.params.paymentId)
    .then(user=>{
        if(!user)
        {
            const error = new Error("Error Occured");
            error.statusCode = 401;
            throw error;
        }
        request(`https://${process.env.KEY_ID}:${process.env.KEY_SECRET}@api.razorpay.com/v1/apyments/${req.params.paymentId}`,
          function(error,response,body)
          {
              if(body)
              {
                  const result = JSON.parse(body);
                  res.status(200).json(result);
              }
          }
        ) 

    })
    .catch(err=>{
        console.log(err)
    })
}