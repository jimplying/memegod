const { RedditSimple } = require("reddit-simple");
const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    if (message.toString().toLowerCase() === "!meme") {
        const subreddits = ["dankmemes", "surrealmemes", "comedyheaven", "DeepFriedMemes"]
        const randomElement = subreddits[Math.floor(Math.random() * subreddits.length)];

        RedditSimple.RandomPost(randomElement).then(res => {
            message.channel.send(res[0].data.url);
        });
    }
});

