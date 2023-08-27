const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io')
// const io = new Server(server)
var cors = require('cors');
app.use(cors());
const port = process.env.port || 4000;
const userRoute = require('./routes/userRoute')
const postRoute =  require('./routes/postRoute')
const eventRoute = require('./routes/eventRoute')
require('./db');
const User = require('./models/userModel')

app.use(express.json())
app.use(express.static('public'))
app.use('/api/users',userRoute); 
app.use('/api/posts',postRoute);
app.use('/api/events',eventRoute)

app.get('/',(req,res)=>{
    res.send('<h1>helo from home page</h1>')
})

const io = require('socket.io')(server,{
cors:{
origin:'http://localhost:3000',
method: ['GET','POST']
}
});
io.on('connection',(client)=>{
    client.on('send-message',(data)=>{
        io.sockets.emit('receive-message',data)
    })
})
server.listen(port,()=>{
    console.log(`server is start on port no. ${port}`)
})