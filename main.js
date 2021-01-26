const Discord  = require('discord.js');
const client = new Discord.Client();

prefix = '<@!801256475233353750> ';
const allPrefix = '-';

designatedVC = null;

client.once('ready', () => {
    console.log('HarloBot is online!')
});

client.on('message', message =>{
    args = [""];

    if(message.author.bot){ 
        return;
    }else if(message.content.startsWith(prefix)){

        args = message.content.slice(prefix.length).split(/ +/);
        message.react('😄');
    }
    else if(message.content.startsWith(allPrefix)){
        args = message.content.slice(allPrefix.length).split(/ +/);
        
        message.react('📢');
    }
    const command = args.shift().toLowerCase();
    console.log(args);
    console.log(command);
    

    if(command === 'ping'){
        message.channel.send('pong!');
        
    }else if(command === 'join'){
        if(designatedVC != null){
        designatedVC.join();
        }
        
    }else if(command === 'set'){
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            
            designatedVC = message.member.voice.channel;
            
            message.channel.send('ID: ' + designatedVC.id);
            
        } else {
            message.channel.send('You need to join a voice channel first!')
            .then(message => {
            }).catch();
        }
    }else if(command === 'clear'){
        designatedVC = null;
    }else if(command === 'display'){
        message.channel.send('ID: ' + designatedVC.id);
    }
    


    
})
client.login('ODAxMjU2NDc1MjMzMzUzNzUw.YAeCPg.oLD_9tsoYXkmCaxSi_MgG0_M9Zg'); 


