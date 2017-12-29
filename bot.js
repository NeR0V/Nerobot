const Discord = require("discord.js");

const TOKEN = "MzkzNTU4NzQ0NTY4NTYxNjc0.DR3iOw.5xJ2B-eZskbzRtixFVB6TQ28CJg";
const PREFIX = "p";

var bot = new Discord.Client();

bot.on("ready", function () {
    console.log("Abrindo bot...");

    bot.user.setStatus('online');

    bot.user.setGame('Killua meu amor <3');

});



bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
 
    if (message.content === "LUL") {
        message.channel.sendMessage("Fon");
    }

    if (message.content === "Oie") {
        message.channel.sendMessage("Oie <@231397798497484803> amor <3");
    }

    if (message.content.startsWith(PREFIX + 'Oie')) {
        if (message.author.id !== "<@305473992381300736>") return;
    }

    if (message.content === "tudo bom?") {
        message.channel.sendMessage("Sim amor, e voce?");
    }

    if (message.content === "eai amor, vai rolar hj anoite?") {
        message.channel.sendMessage("Vai sim amor, vai rolar bem selvagem rsrs");
    }

    if (message.content === "talarico") {
        message.channel.sendMessage("Claro amor, tira essa sua rola dura envergada pra fora que eu vou chupar, e depois mete em mim e goza todinho.");
    }

    if (message.content === "oi") {
        message.channel.send("Oi " + message.author.toString() + " !");
    }

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "namorado":
            message.channel.sendMessage("Meu namorado e o Killua! Ele e muito lindo! ");
            break;
    }
});

bot.login(TOKEN);
