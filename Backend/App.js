const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const paymentRoute=  require("./Routes/paymentRoute");
const passport = require("passport");
const GoogleUser = require('./models/Google');
const cookieSession = require('cookie-session');
const authRoute = require('./Routes/googleAuth');
app.use(bodyParser.json());
app.use(cors({origin:"*",credentials:true}));
const dotenv = require("dotenv");
dotenv.config();
const http = require('http');
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

//const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
app.enable("trust proxy");
app.use('/auth',authRoute);

mongoose.connect('mongodb+srv://HarbourX-syneregy:aashish_123@cluster0.nfibo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(result=>{
    app.listen(8080,()=>{
        console.log("app is running")
    })
})
.catch(err=>{console.log(err)});