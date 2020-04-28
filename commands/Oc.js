const emitter = require('central-event');
const spongeCase = require("sponge-case");


emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!oc") {
        message.channel.send(spongeCase.spongeCase("Ik ben zelf ook een memegod"));
    }
});
