const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!wadm") {
        message.channel.send("https://youtu.be/DFY_scgPl80?t=26");
    }
});
