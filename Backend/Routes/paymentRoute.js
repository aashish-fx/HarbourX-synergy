const express=require("express");
const router = express.Router()
const payment = require("../Controller/paymentController");
router.get("/paymentRoute",payment.paymentOrder);
router.post("/payment/callback",payment.paymentCallback);
router.get("/payments/:paymentId",payment.getPayment);
module.exports = router;