const discord = require('discord.js')
let Discord = require(`discord.js`)
var jimp = require('jimp');
const Jimp = require('jimp');
const client = new discord.Client()
const os = require('os');
const { send } = require('process');
client.login('')//your's bot token here
client.on('ready', () => {
   console.log('The Bot has Started!');
   client.user.setActivity("??help", {
       type: "WATCHING",
       name: "??help"
     });
   });

client.on('message', async message =>{
   let prefix = '??'//your preffered prefix here
   if (!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (!prefix) return;
    if(command === 'cat') return message.channel.send('<a:cat:773862641265147944>') //show a cat on command !!cat
    if(command === 'cats') return message.channel.send('<a:cat:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944><a:pikachu:773862641265147944>')// show cats
    if(command === 'rickroll') return message.channel.send('https://tenor.com/view/rick-ashley-dance-80s-music-gif-12136175')//rickroll gif
    if (message.content.toLowerCase() === 'ping') {  
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);//show latency
     }

     if(command === 'invite') message.channel.send('https://discord.com/api/oauth2/authorize?client_id=788740772978622504&permissions=8&scope=bot')//invitie this bot to other servers
     if(command === 'stats'){//stats of your bot
      if (message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      //making things shorter
      let servercount = client.guilds.cache.size;
      let usercount = client.users.cache.size;
      let channelscount = client.channels.cache.size;
      let arch = os.arch();
      let platform = os.platform();
      let shard = client.ws.shards.size;
      let NodeVersion = process.version;
      let cores = os.cpus().length;
      //making embed message
      let stats = new Discord.MessageEmbed()
      .setAuthor('BotPou1')
      .setTitle(`Statistics of ${client.user.username}`)
      .setColor('BLUE')
      .addField("Server Count", `${servercount}`, true)
      .addField("Users Count", `${usercount}`, true)
      .addField("Channel's Count", `${channelscount}`, true)
      .addField('Architecture', `${arch}`, true)
      .addField('Platform', `${platform}`, true)
      .addField('Node-Version', `${NodeVersion}`, true)
      .addField('Shards', `${shard}`, true)
      .addField('Cores', `${cores}`, true)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
      message.channel.send(stats)// sending embed message
     }
     if (command === 'clearchat') {  //clear chat with empty characters that are not spaces
        message.channel.send('⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀\n⠀');
     }
     if(command === 'help') {// help command
        //create embed message
        let embed = new discord.MessageEmbed()
        .setTitle('BotPou Commands')
        .addField('"??"','prefix of this bot. Use it on start of the command')
        .addField('help','shows this')
        .addField('cat', 'shows a cat')
        .addField('cats', 'shows cats')
        .addField('rickroll', 'show rickroll gif')
        .addField('clearchat', 'make the chat empty')
        .addField('triggered','get triggered')
        .addField('memehelp', 'list of avaible memes commands')
        .addField('⠀⠀','Bot made by SuperPou1')
        .setColor("RANDOM")//set random color for side line
         message.channel.send(embed)//send embed
     }
     if(command === 'memehelp'){//meme list
        let embed = new discord.MessageEmbed()
        .setTitle('BotPou meme Commands')
        .addField('" + "', 'command must be splitted with arguments using it')
        .addField('drake + <drake no> + <drake yes>', 'make drake meme')
        .setColor("RANDOM")
        message.channel.send(embed)

     }
     if(command === 'triggered'){ //an example for putting image over user's avatar
      const user = message.mentions.users.first() || message.author;
      var triggered = "https://i.imgflip.com/189yww.jpg"//getting the image we want to put on our avatar and naming it "triggered"
      var pfp = user.avatarURL({ format: 'png', dynamic: true, size:512}) //getting user's avatar
      var image = await Jimp.read(pfp)//reading the avatar and naming it  "image"
      image.resize(512, jimp.AUTO)//resizing the avatar so we are sure that it is exact resolution we want
      image.composite((await Jimp.read(triggered)).resize(512, 124), 0, 390)//reading "triggered" image, resizing it and putting it on our "image" on position we want
      var image = new Discord.MessageAttachment(await image.getBufferAsync(Jimp.MIME_PNG))
      message.reply(image)// we send the image
     }
     
     if(command === 'drake'){//drake meme
      const args = message.content.slice(prefix.length).trim().split(' + ');//seperating arguments by " + "
      const command = args.shift().toLowerCase();//preventing command being one of the arguments
      const drakeno = (args[0])//specifying argument 1 and calling it "drakeno" 
      const drakeyes = (args[1])//specifying argument 2 and calling it "drakeyes" 
      if (!args.length) {//if there are no arguments
         return message.channel.send(`You didn't provide any arguments, ${message.author}!`);}//replying to the user
      if(!args[1]) return message.channel.send('One or more arguments are missing!')//if argument is missing, sending message
      if (drakeno.length > 70 || drakeyes.length > 70) return message.channel.send('one of the arguments is too long');//if argument is longer than 70 characters sending message
      var image = "https://nyc3.digitaloceanspaces.com/memecreator-cdn/media/__processed__/f87/template-drake-hotline-bling-0c6db91aec9c.jpg" 
      var template = await Jimp.read(image)//reading meme template
      const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);//loading font 
      template.print(font, 515, 15, {text: drakeno, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE}, 470, 470)//printing text on position "512, 15", making a "text box" with size "470, 470" and aligning the text to the center
      template.print(font, 515, 515, {text: drakeyes, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE}, 470, 470)
      var template = new Discord.MessageAttachment(await template.getBufferAsync(Jimp.MIME_PNG))
      message.channel.send(template)
     }
    
})
