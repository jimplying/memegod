const Discord = require('discord.js');
const { RedditSimple } = require("reddit-simple");

const auth = require('./auth.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot succesfully logged in');
});

client.on('message', message => {
    try {
        if (message.toString().toLowerCase() === "!meme") {
            const subreddits = ["dankmemes", "surrealmemes", "comedyheaven", "DeepFriedMemes"]
            const randomElement = subreddits[Math.floor(Math.random() * subreddits.length)];

            RedditSimple.RandomPost(randomElement).then(res => {
                message.channel.send(res[0].data.url);
            });
        } else if (message.toString().toLowerCase() === "!kompjoeter") {
            RedditSimple.RandomPost("battlestations").then(res => {
                message.channel.send(res[0].data.url);
            });
        } else if (message.toString().toLowerCase() === "!ass") {
            RedditSimple.RandomPost("ass").then(res => {
                message.channel.send(res[0].data.url);
            });
        } else if (message.toString().toLowerCase() === "!tits") {
            RedditSimple.RandomPost("tits").then(res => {
                message.channel.send(res[0].data.url);
            });
        } else if (message.toString().toLowerCase() === "!help") {
            message.channel.send("Joe ken use de vollowing kommends: ```!meme, !kompjoeter, !ass, !tits```");
        }

    } catch (error) {
        message.channel.send("Dr ging wat mis, blame Guido voor bad development");
    }
});

client.login(auth.token);