const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:room", (req, res) => {
    const room = req.params.room;
});

function getUsersInRoom(room) { // 해당 방에있는 사용자들을 가져오기 위한 함수
    const users = [];
    //채팅룸에 접속한 socket.id값을 찾아야함
    const clients = io.sockets.adapter.rooms.get(room); // adapter : 여러 방에 있는 정보 다 합쳐줌, 따라서 모든방에대한 정보
    //Map에 접근할 때는 Map.get(키값) 하면 밸류가 나옴, 여기서 room = roomName, 방을 만들때 입력한 값 ex)방1
    //console.log(clients)
    if (clients) {
        clients.forEach((socketId) => {
            //io.sockets.sockets : socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(socketId);
            //개별 사용자에게 메세지를 보내기 위해서 객체형태로 변경
            //key: 소켓아이디, name: 이름
            const info = {name : userSocket.user, key : socketId}
            users.push(info);
        });
    }
    return users;
}
const roomList = [];

io.on("connection", (socket) => {
    //socket!//
    //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
    //socket은 나만, io는 모두가
    //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    console.log('io.sockets',io.sockets.sockets);
    //채팅방 목록 보내기
    socket.emit("roomList", roomList);
    //채팅방 만들기 생성
    socket.on("create", (roomName, userName, cb) => {
        //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
        //socket.rooms에 socket.id값과 방이름 확인가능
        socket.join(roomName);
        //socket은 객체이며 원하는 값을 할당할 수 있음
        socket.room = roomName;
        socket.user = userName;
        //최초 입장
        socket.broadcast.to(roomName).emit('notice', `${userName}님이 입장하셨습니다.`)
        

        //채팅방 목록 갱신
        if (!roomList.includes(roomName)) { //includes: 값이 있는지 확인
            roomList.push(roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit("roomList", roomList);
        }
        const usersInRoom = getUsersInRoom(roomName);
        io.to(roomName).emit("userList", usersInRoom);
        cb();

       
        
    });

    socket.on("sendMessage", (message) => {
        console.log(message);
        if ( message.user === 'all') {
            io.to(socket.room).emit("newMessage",message.message, message.nick, false);
        } else {
            io.to(message.user).emit("newMessage",message.message, message.nick, true);
            //자기 자신한테 내가 보낸 귓말 표시하기
            socket.emit("newMessage",message.message, message.nick, true);
        }
    });


    socket.on("disconnect", () => {
        if (socket.room) {
            socket.leave(socket.room);
        }
    });
});

server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
