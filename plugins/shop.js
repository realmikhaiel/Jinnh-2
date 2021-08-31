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

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `🤍AJMAL EDITZ ( GFX SHOP)🤍
💖 LOGO (THEMED) - 10
💖 LETTER LOGO - 10
💖 STREAMING OVERLAY NORMAL - 10
💖 ANIMATED STREAMING OVERLAY - 10
💖 ANIMATED STREAMING OVERLAY WITH 3D CHARACTER - 15
💖 STREAM START AND END - 15
💖 ANIME LOGO - 10
💖 INTRO NORMAL - 10
💖 GAMING INTRO - 15
💖OUTRO (ALL KIND) - 10
💖 YOUTUBE BANNER - 5
`}) 

}));
