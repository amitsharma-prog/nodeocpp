const Websocket = require('ws');

// Create a new socket server

const wss = new Websocket.Server({port:8000});

wss.on('connection', (ws) => {
    console.log("A new client is connected");

    //send data to client

    const user = {
        name: 'Amit',
        age: 22,
        country: "india"
    }
    ws.send(JSON.stringify(user));

    ws.on('message', (data) => {
        console.log(data.toString());
    })
})