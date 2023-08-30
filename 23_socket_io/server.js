const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express();
const PORT = 8000

//http서버
const server = http.createServer(app)
//socket서버
const io = SocketIO(server)

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('client')
})
app.get ('/p1' ,(req,res) => {
    res.render('pr1')
})

io.on('connection', (socket) => {
    socket.on('open_message', (arg, cb) => {
        console.log(arg);
        cb(arg)
    });
    socket.on('form_message', (arg) => {
        console.log(arg);
        socket.emit("backend_message", arg);
    });
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
