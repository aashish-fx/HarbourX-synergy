const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const paymentRoute=  require("./Routes/paymentRoute");
app.use(bodyParser.json());
app.use(cors({origin:"*",credentials:true}));
const passport = require("passport");
const GoogleUser = require('./models/Google');
const cookieSession = require('cookie-session');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['fvdfvergrbhn'],
    secure:true,
    sameSite:"none"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user,done)=>{
    return done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    console.log(id);
    GoogleUser.findById(id)
    .then(user=>{
        console.log("found");
        return done(null,user);
    })
})
passport.use(new GoogleStrategy({
    clientID:`${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL:"/auth/google/callback"
},
function(accessToke,refreshToken,profile,done)
{
    console.log(profile,'---');
    GoogleUser.findOne({googleId:profile.id})
    .then(user=>{
        
        if(user)
        {
            return done(null,user);
        }
        else{
            const googleUser = new GoogleUser({
                date:new Date().toISOString(),
                name:profile.displayName,
                googleId:profile.id,
                image:profile.photos[0].value
            })
            googleUser.save()
            .then(newUser=>{
                return done(null,newUser);
            })
            .catch(err=>{
                console.log(err);
            })
        }

    })
}    
));
app.get('/auth/google',passport.authenticate('google',{scope:['profile']}));
app.get('/auth/google/callback',
passport.authenticate('google'),
  (req,res)=>{
    console.log(req.user);
    res.redirect("http://localhost:3000");
})

app.use('/api',paymentRoute);
app.listen(8080,()=>{
    console.log("app is running")
})