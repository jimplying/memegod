const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!beppie") {
        message.channel.send("https://youtu.be/Y8fak3er5gU?t=7");
    }
});
