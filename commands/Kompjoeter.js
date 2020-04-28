const { RedditSimple } = require("reddit-simple");
const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!kompjoeter") {
        RedditSimple.RandomPost("battlestations").then(res => {
            message.channel.send(res[0].data.url);
        });
    }
});