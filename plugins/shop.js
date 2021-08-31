const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'shop', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/WnGF9Sg.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.alloc (), MessageType.image, {mimetype: Mimetype.png, caption: `*🤍AJMAL EDITZ ( GFX SHOP)🤍*\n\n💖 LOGO (THEMED) - 10\n \n💖 LETTER LOGO - 10\n \n💖 STREAMING OVERLAY NORMAL - 10\n \n💖 ANIMATED STREAMING OVERLAY - 10\n \n💖 ANIMATED STREAMING OVERLAY WITH 3D CHARACTER - 15\n \n💖 STREAM START AND END - 15\n \n💖 ANIME LOGO - 10\n \n💖 INTRO NORMAL - 10\n \n💖 GAMING INTRO - 15\n \n💖OUTRO (ALL KIND) - 10\n \n💖 YOUTUBE BANNER - 5`}) 

}));
