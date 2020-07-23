const Discord = require("discord.js");
const client = new Discord.Client();
var token = "token ici"
var prefix = "/"
const alexa = require('alexa-bot-api')
var chatbot = new alexa('aw2plm')
const request = require('request'); 
const cheerio = require('cheerio');

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
	console.log ('working')
 return;	
} 
if (message.content.includes('a'))
{
	setTimeout(() => { 
		let content = message.content;;
	
			
	
		chatbot.getReply(content).then(r => message.channel.send(r))
		
		
		}, 570);
} else if (message.content.startsWith('Sunny.stop')){

	message.channel.send('ok ill stop talking')
	return console.log ('stoping');
}
		
client.on("message", function(message) {

			var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
		  
			/* Simple command manager */
			if (parts[0] === ";image") { // Check if first part of message is image command
		  
				// call the image function
				image(message, parts); // Pass requester message to image function
		  
			}
		  
		  });
		  
		  function image(message, parts) {
		  
			/* extract search query from message */
		  
			var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
		  
			var options = {
				url: "http://results.dogpile.com/serp?qc=images&q=" + search,
				method: "GET",
				headers: {
					"Accept": "text/html",
					"User-Agent": "Chrome"
				}
			};
			request(options, function(error, response, responseBody) {
				if (error) {
					// handle error
					return;
				}
		  
				
		  
				$ = cheerio.load(responseBody); 
		  
				var links = $(".image a.link");
		  
				var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
		  
				
				if (!urls.length) {
					
					return;
				}
		  
				//urls[0]
				message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
			});
		  
		  }


	});
 
client.login("NzM0MTUzMzk4NTc5ODg4MTU5.XxiQLw.FZ7L4cwoOs-NKeWf9PRfspOTERg")