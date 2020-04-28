const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!help") {

        const normalizedPath = require("path").join(__dirname);
        let commands = [];

        require("fs").readdirSync(normalizedPath).forEach(function (file) {
            commands.push(file.substring(0, file.indexOf(".js")))
        });

        const reply = "Joe ken sendt de vollowing kommends: ```" + commands.toString() + "```";
        message.channel.send(reply);
    }
});