node is cool

// .then(msg => {
							msg.delete({ timeout: 1000 })
						  });

                          var challenged = user.toString();
			var response = cclaim [Math.floor(Math.random()*cclaim .length)];
			setTimeout(() => { message.channel.send(response); }, 2070)
				.then(() => {
				  message.channel.awaitMessages(response => response.content == 'thanks' && response.author.id == fighter2 || response.content == 'gg' && response.author.id == fighter2, {
						max: 1,
						time: 5000,
						errors: ['time'],
					})
					
					.then((collected) => {
						if (collected.first().content == 'thanks') {
						  message.channel.send(`you welcome`)
						 
						}
						else if(collected.first().content == 'gg') {
							message.channel.send(`gj ${challenged}`);
						}
					})
					.catch(() => {
						message.channel.send(`nice claim still`);
					});
				});      
			}