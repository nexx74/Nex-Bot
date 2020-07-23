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
	console.log ('working')
 return;	
}  

if (message.author.id === client.user.id){
	function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(6));
// expected output: 0, 1 or 2
	console.log ('working')
 return;	
} 
	setTimeout(() => { 
		let content = message.content;;
	
			
	
		chatbot.getReply(content).then(r => message.channel.send(r))
		
		
		}, (getRandomInt(6));
			
	});
 
client.login("NzM0MTUzMzk4NTc5ODg4MTU5.XxiQLw.FZ7L4cwoOs-NKeWf9PRfspOTERg")
