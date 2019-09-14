const Discord = require('discord.js');
const client = new Discord.Client();
const appRoot = require('app-root-path');
const fs = require('fs');

function processCommand(receivedMessage) {
    //var channel = client.channels.get("613706818555871271");
    var message = receivedMessage.content.substring(1, receivedMessage.content.length);
    var path = appRoot.resolve("images/" + message + ".png");
    //console.log(path);
    fs.access(path, fs.F_OK, err => {
        if (err)
            return;
        //file exists
        //console.log(channel.type);
        receivedMessage.channel.send(new Discord.Attachment(path));
    });
}

client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user)
        return;
    if (receivedMessage.content.startsWith("!"))
        processCommand(receivedMessage);     
})

bot_secret_token = "NjIyMzgwNzM3NTg0NDMxMTA0.XX0lpQ.yxkxH2EKUZMTv6uBt9KNtWki1lY";

client.login(bot_secret_token);
