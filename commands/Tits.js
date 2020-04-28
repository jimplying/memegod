const { RedditSimple } = require("reddit-simple");
const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!tits") {
        RedditSimple.RandomPost("tits").then(res => {
            message.channel.send(res[0].data.url);
        });
    }
});

