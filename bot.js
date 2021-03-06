const Discord = require('discord.js');
const emitter = require('central-event');

var normalizedPath = require("path").join(__dirname, "commands");

require("fs").readdirSync(normalizedPath).forEach(function (file) {
    require("./commands/" + file);
});

const auth = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot succesfully logged in');
});

client.on('message', message => {
    try {
        if (message.content.substring(0, 1) === "!") {
            // if (message.member.user.tag == "Milan#0738") {
            //     message.channel.send("Milan, je moet je bek houden");
            // } else {
                console.log('Received message: ' + message.content + ' from: ' + message.member.user.tag);
                emitter.emit('messageReceived', message);
            // }
        }
    } catch (error) {
        console.log(error);
        message.channel.send("Dr ging wat mis, blame Guido voor bad development");
    }
});

client.login(auth.token);