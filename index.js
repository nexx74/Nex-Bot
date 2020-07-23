const Discord = require("discord.js");
const client = new Discord.Client();
var token = "token ici"
var prefix = "/"
const alexa = require('alexa-bot-api')
var chatbot = new alexa('aw2plm')

client.on('ready', () => {
	console.log('READY!!');
	console.log('logged in as ' + client.user.id );
});
 
client.on('message', message => {


if (message.author.bot){
	console.log ('bot message ignore')
 return;	
}  
	setTimeout(() => { 
		let content = message.content;;
	
			
	
		chatbot.getReply(content).then(r => message.channel.send(r))
		
		
		}, 2570);
			
	});
 
client.login("NzM0MTUzMzk4NTc5ODg4MTU5.XxiQLw.FZ7L4cwoOs-NKeWf9PRfspOTERg")
