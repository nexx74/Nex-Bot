const Discord = require("discord.js");
const client = new Discord.Client();
var token = "token ici"
var prefix = "/"
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

const hResponses = ['test','Once upon a terribly dreadful time, there was a small cat-licking',
 'bird that lived on a lane by my house whose name was',
  'Charles just like every other soul, male or female', 'that lived on my smelly, stinky, orange, old, rotten, messy, busted cul-de-sac between Belmont',
  ' and Rose which are both Gay-ass Streets Like North street or some shit that reminds me of a celebrity ',
  'like Paris Hilton or some blonde loser that doesn', 
  'even know the capital of her own country, which is the United States of America aka:',
   'The U.S.A which is a pristine nation of beauty, opposing to a country as the country of',
	'Somalia and Belgium, a part of Europe, which doesn',
	't even have a government, it',
	's just in a complete state of anarchy just like my mind and soul which are bot',
	'h filled with outrageous nonsense that I',
	'm typing down right now into some fat long sentence that probably makes no sense but who cares I',
	'm trying to set some sort of weird record here like most ducks snorted or some weird thing like',
	 'that and if I do set some sort of',
	'record I will be in the Guinness Book of World Records (though anti-American and pro-European', 
	'a place of pitty and despair as Somalia is) which was ', 
	'always my dream because that book has a whole bunch a cool and weird stuff in it and I would Become famous and',
	'add to the weirdness of the book like some of their records which reminds me of the Rob & Big',
	 'where Rob sets all of those skateboarding Records And Big Black eats bananas and donuts and',
	'three weeks later they both get plaques saying the record they set and I want to get',
	 'one of those so thats why Im writing all of this stuff down without ever using a period or some',
	'other sentence ending mark like an exclamation point or a question mark or any other symbol that ',
	'could possibly end my streak of words that is really long now and would take me a while to count just',
	'like counting sheep which is supposed to put you to sleep but it really keeps you awake because you',
	'want to keep counting and counting until you dont know what comes after trillions', 
	'but that would take Years or something because it would take a while',];
	
	const helloResponsep =[
		"hi thanks for @ing me and i get what you mean but just block me and move on.",
		"i get what you mean but just ignore me sorry im sleep depreived",
		"oh im sorry but just block me and ignore my weirdness",
		"i dont know what you mean but just block me and do you thing thanks.",
		];

const helloResponses = ["hi pp is googoo", "i like men do you", "tee tee hee hee",
"What do you call a five year old with no friends? A sandy hook survivor.",
"Jesus Christ fed 2,000 people with 5 loaves of bread and 2 fish, but Adolf Hitler made 6 million Jews toast.",
"What's got 5 arms, 3 legs and 2 feet? The finish line at the Boston Marathon.",
"How do Ethiopians celebrate their kids first birthday? By putting flowers on the grave.",
"How did Rihanna find out Chris Brown was cheating on her? She found another woman's lipstick on his knuckles.",
"How can you tell if your wife is dead? The sex is the same but the dishes start piling up",
"What is a pedophiles favorite part about Halloween? Free delivery.",
"How do you kill a redneck? Wait 'till he fucks his sister then cut the brakes on his house.",
"What is a pedophiles favorite part about Halloween? Free delivery.",
"How do you kill a redneck? Wait 'till he fucks his sister then cut the brakes on his house.",
" Why do Jews have big noses? Because air is free.",
"What happened when the jew walked into the wall with a hard-on? He broke his nose. ",
"How long does it take for a black woman to take a shit? Nine months.",
" How do you get a nun pregnant? Dress her up like an altarboy.",
"What do you call 40 mexicans buried up to their neck in sand? A spicket fence. ",
"How many women does it take to screw in a lightbulb? None,they just sit in the dark and bitch. ",
" Did you hear about the two car pile up in Mexico? 200 Mexicans died.",
"What kind of file do you need to turn a 15mm hole into a 40mm hole? A pedophile. ",
" What's a pedophile's favorite part of a hockey game? Before the First Period.",
" How do you swat 200 flies at one time? Hit an Ethiopian in the face with a frying pan.",
" What is a redneck virgin? A seven year old that can run faster than her brothers.",
];
const happy =[
"Success is walking from failure to failure with no loss of enthusiasm.",
"Try not to become a person of success, but rather try to become a person of value.",
"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
"Perfection is not attainable, but if we chase perfection we can catch excellence.",
"Whoever is happy will make others happy too.",
"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
"Believe you can and you're halfway there.",
"It is during our darkest moments that we must focus to see the light.",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
"Perfection is not attainable, but if we chase perfection we can catch excellence.",
];
const cclaim =[
	"Nice card gg.",
	"that was a great card.",
	"amazing card.",
	"dude what a great card.",
	"that was a nice card.",
	"Nice card gg.",
	"that was a great speed.",
	"amazing card.",
	"dude what a great grab.",
	"that was a nice grab.",
	"Niceeee gg.",
	"that was a great gg.",
	"amazing clutch.",
	"dude what a great game.",
	"that was a nice game.",
	];
const anime =[
	"Anime is, in fact, an abbreviated pronunciation of Animation in Japan. It began in 1917 by Japanese artists : Shimokawa Oten, Jun'ichi Kouchi and Seitaro Kitayama.",
	"Anime is not synonymous with cartoon despite the popular belief held by the Uneducated masses. Anime is considered to be an art form by those who appreciate it. ",
	"A wide range of audiences are targeted with complicated, in depth and emotional storylines.",
	"In Japan, there are more than 40 new animes appear on television per week",
	"In Japan, more paper are used to print manga than toilet paper.",
	"All genres are represented, but Sci-Fic is by far the most popular ; Robots, post-apocalyptic metropolises and motorcycles are all staples of the art form.",
	"TEZUKA Osamu is the most famous manga artist in Japan.",
	"One of the interesting things about manga is that it is widely read by women.",
	"Most famous music video based on Ghost in the Shell.",
	"All manga is drawing by hand.",
	"in Japanese, manga means Whimsical Pictures",
	"One Piece, which is most popular manga in Japan was supposed to run for maximum 5 years, but Oda ( Author of OP) continued it till date (18 years) and it's still going on without any sign of stopping.",
	"Kishimoto (Author of Naruto), when he was developing the original Naruto manga, initially had not intended to create Sasuke !",
	"After speaking with his editor about the future of the series, he was advised to create a rival for the main character of the series, which result in Sasuke's creation.",
	"In Japan it's common that after someone does not to keep a manga volume anymore, they leave it somewhere such as a table or just a bench for someone to pick it up.",
	"The anime Death Note was banned in China as it became so popular that kids used to buy Death Note Notebooks and write the names of all people they hated and wished them to die !!",
	"Each resident of Japan spends around 30 £ for manga each year.",
	"Manga Cafés are available in Japan. Readers can enjoy their favorite manga with a cup of coffee.",
	"In the manga industry, it's normal to see the author dating with the corresponding editor, especially male editor and female author !!",
	"The first anime,in 1917, was a two minutes clip of samurai testing his new sword. ",
	"Anime is a japanese word. They don't use plural, so anime = anime not animes XD ",
	"Mangas are read backwards for North American from right to left...",
	];

client.on('ready', () => {
    console.log('𝕊𝕖𝕝𝕗𝔹𝕠𝕥〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 Râįń#4098 〗 [𝕆ℕ]');
});
 
client.on('message', message => {
    if (message.content.includes(prefix + "about")) {
        if (message.author.id == client.user.id) {
            let help = new Discord.RichEmbed()
                .setAuthor(`${message.author.username}`)
                .setTitle("**〖Unknown SelfBot〗**")
                .setColor("#00D6GF")
				.addBlankField()
				.addField("🠶 **HElP**", "```command = /help```")
                .addField("🠶 **SERVER 😂**", "```PRIVATE```")
                .setThumbnail(`${message.author.avatarURL}`)
                .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 Râįń#4098 〗⭐️")
                .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
            message.channel.send(help)
        }
    }
 
    if (message.content.includes(prefix + "help")) {
        if (message.author.id == client.user.id) {
            let help = new Discord.RichEmbed()
                .setAuthor(`${message.author.username}`)
                .setTitle("**【𝗛𝗘𝗟𝗣】**")
                .setColor("#00D6FF")
                .addBlankField()
                .addField("🠶 **𝗔𝗯𝗼𝘂𝘁 👻** *shows you the bout section* ", "```「/𝗮𝗯𝗼𝘂𝘁」```", true)
                .addBlankField()
                .setThumbnail(`${message.author.avatarURL}`)
                .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 Râįń#4098 〗⭐️")
                .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
			message.channel.send(help)
			/*  .addField("🠶 **𝗙𝘂𝗻𝗻𝘆 😂** *funny gifs and emojies*", "```「/f𝘂𝗻𝗻𝘆」```", true)
                .addField("🠶 **𝗔𝗰𝘁𝗶𝘃𝗶𝘁𝘆 🍁** *change your activity or other features*", "```「/𝗮𝗰𝘁」```", true)
				.addField("🠶 **𝗥𝗮𝗶𝗱 😈** *exploits into discord api to do real damage*", "```「/𝗲𝘅𝗽𝗹𝗼𝗶𝗱」```", true)
				.addField("🠶 **Scan ⭐️** *scan a victum to get information*", "```「/scan」```", true)
				.addField("🠶 **install 🔴** *download a beta version of this*", "```「/install」```", true) */
        }
	}

		if (message.content.includes ('joke')) {
			if (message.author.bot) return;
			var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
			setTimeout(() => { message.channel.send( response); }, 2070);
		}

		if (message.content.includes ('random')) {
			if (message.author.bot) return;
			var response = hResponses [Math.floor(Math.random()*hResponses .length)];
			setTimeout(() => { message.channel.send(response); }, 2070);
		}

		if (message.content.includes ('dark')) {
			if (message.author.bot) return;
			var response = happy [Math.floor(Math.random()*happy .length)];
			setTimeout(() => { message.channel.send(response); }, 3070);
		}
		if (message.content.includes ('anime')) {
			if (message.author.bot) return;
			var response = anime [Math.floor(Math.random()*anime .length)];
			setTimeout(() =>{ message.channel.send("did you know " + response); }, 3070);
		}
		if (message.content.includes ('<@689813480970125360>')) {
			if (message.author.bot) return;
			var response = helloResponsep [Math.floor(Math.random()*helloResponsep .length)];
			setTimeout(() =>{ message.channel.send( response); }, 3070);
		}
		if (message.content.startsWith ('hi')) {
			if (message.author.bot) return;
			setTimeout(() =>{ message.channel.send('hey');  }, 3070);
			
		}
		if (message.content.startsWith ('welcome')) {
			 setTimeout(() =>{ message.channel.send('wellcome'); }, 3070);
			if (message.author.bot) return;
		}
		if (message.content.startsWith ('hello')) {
			if (message.author.bot) return;
			 setTimeout(() =>{ message.channel.send('hellllo'); }, 1070);
		}
		if (message.content.startsWith ('stop')) {
			if (message.author.bot) return;
			 setTimeout(() =>{ message.channel.send('ok ill stoop sorry'); }, 1070);
		}
		if (message.content.startsWith ('Hi')) {
			
			message.channel.send('hey');  setTimeout(() =>{ if (message.author.bot) return; }, 1070);
			
		}
		if (message.content.startsWith ('Welcome')) {
			if (message.author.bot) return;
			  setTimeout(() =>{ message.channel.send('wellcome'); }, 3070);
		}
		if (message.content.startsWith ('Hello')) {
			if (message.author.bot) return;
			  setTimeout(() =>{ message.channel.send('hellllo'); }, 3070);
		}
		if (message.content.startsWith ('Stop')) {
			if (message.author.bot) return;
			  setTimeout(() =>{ message.channel.send('ok ill stoop sorry'); }, 3070);
		}
		
		if (message.content.includes('claim')){
			//checks if the username to fight is in the message
			let author1 = message.mentions.users.first();
			let user =  message.author.username;
			if(!user) return message.reply(" ok ");
		  
			//checks if the users is trying to fight themselves
			if(user.id == message.author.id) return message.reply('ok bot');
		  
			//checks if the user is trying to fight the bot
			if(user.bot ==  true)
				return;
		  
			//saves the two user ids to variables
			var fighter1 = message.author.id;
			var fighter2 = user.id;
		  
			//announces challenge and awaits response
			var challenged = user.toString();
	
			var response = cclaim [Math.floor(Math.random()*cclaim .length)];
			setTimeout(() =>{ message.channel.send(response); }, 3070);
			 message.channel.send('?cla')
				.then(() => {
				  message.channel.awaitMessages(response => response.content == 'thanks' && response.author.id == fighter1 || response.content == 'gg' && response.author.id == fighter1, {
						max: 1,
						time: 30000,
						errors: ['time'],
					})
					
					.then((collected) => {
						if (collected.first().content == 'thanks') {

					   message.channel.send('ur welcome');

							}
		   
						else if(collected.first().content == 'gg') {
							
					  message.channel.send('gj you were fast')
	
						}
					})
					.catch(() => {
						message.channel.send('i wish i was fast enough')
					
					});
				});      
			}
		
		
});
 
client.login("Njg5ODEzNDgwOTcwMTI1MzYw.XxesFg.04hVT1ej4qMqlGAsfIePJ8TYzDs")