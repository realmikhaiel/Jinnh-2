/* 
codded by @Mikhaiel
use this git under copyright
dont change credit
*/

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

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*π€AJMAL EDITZ ( GFX SHOP)π€*\n\nπ LOGO (THEMED) - 10\n \nπ LETTER LOGO - 10\n \nπ STREAMING OVERLAY NORMAL - 10\n \nπ ANIMATED STREAMING OVERLAY - 10\n \nπ ANIMATED STREAMING OVERLAY WITH 3D CHARACTER - 15\n \nπ STREAM START AND END - 15\n \nπ ANIME LOGO - 10\n \nπ INTRO NORMAL - 10\n \nπ GAMING INTRO - 15\n \nπOUTRO (ALL KIND) - 10\n \nπ YOUTUBE BANNER - 5`}) 

}));
