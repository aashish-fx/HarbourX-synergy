const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const authRoute = require('./Routes/googleAuth');
app.use(bodyParser.json());
app.use(cors({origin:"*",credentials:true}));
const dotenv = require("dotenv");
dotenv.config();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

const {addUser,getUser,deleteUser,getUsers} = require('./users');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
app.enable("trust proxy");
app.use('/auth',authRoute);
io.on("connection",(socket)=>{
    
    socket.on('login',({name,room},callback)=>{
        console.log(name,room)
        const {user,error} = addUser(socket.id,name,room)
        if (error) return callback(error)
        socket.join(user.room)
        socket.in(room).emit('notifications',{ title: 'Someone\'s here', description: `${user.name} just entered the room`})
        io.in(room).emit('users',getUsers(room))
        callback()
    })
    socket.on('sendMessage',message=>{
        const user = getUser(socket.id)
        io.in(user.room).emit('message',{user:user.name,text:message});
    })
    socket.on("disconnect",()=>{
        console.log("Disconnected");
        const user = deleteUser(socket.id);
        if(user)
        {
            io.in(user.room).emit('notification', { title: 'Someone just left', description: `${user.name} just left the room` })
            io.in(user.room).emit('users', getUsers(user.room))
        }
    })
})
http.listen(8000,()=>{
    console.log("Lintening");
})
mongoose.connect('mongodb+srv://HarbourX-syneregy:aashish_123@cluster0.nfibo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(result=>{
    app.listen(8080,()=>{
        console.log("app is running")
    })
})
.catch(err=>{console.log(err)});