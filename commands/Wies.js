const emitter = require('central-event');

emitter.on('messageReceived', function (message) {
    songs = [
        "https://www.youtube.com/watch?v=9083Ze1Ng9c",
        "https://www.youtube.com/watch?v=2KJtX6xnHyQ",
        "https://www.youtube.com/watch?v=gTn10Mv1gmw",
        "https://www.youtube.com/watch?v=z5CyBDVnmT4",
        "https://www.youtube.com/watch?v=eBAVfgoZQR0"
    ];
    
    const randomElement = songs[Math.floor(Math.random() * songs.length)];

    message.channel.send(randomElement);
});
