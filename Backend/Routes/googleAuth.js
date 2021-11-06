const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
const GoogleUser = require('../models/Google');
const dotenv = require("dotenv");
dotenv.config();
router.post('/googleauth/',async (req,res)=>{
    const {token} = req.body;
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:"881992624037-5sok9qlba3un1el7itc5nm984k4835iq.apps.googleusercontent.com"
    }) ;
    const {name,email,picture} = ticket.getPayload();
    console.log(ticket.getPayload());
    const verified = true;
    let first_time = true;
    let newUser;
    let result = await GoogleUser.findOne({email:email})
    if(result!==null)
    {
        first_time = false;
    }
    else
    {
        const googleUser = new GoogleUser({
            date:new Date().toISOString(),
            name:name,
            email:email,
            image:picture
        })
        result = await googleUser.save()
    }
    if(result!==null)
    {
        const userId = result._id.toString();
        console.log(userId);
        res.status(200).json({token,userId,userName:name,email,image:picture})
    }
    else{
        res.status(402).end();
    }

})
router.get('/logout/',(req,res)=>{
    req.logout();
    console.log(req.user,"logout");
    res.status(200).json({user:req.user});
})
module.exports = router;