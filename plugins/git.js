const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://ibb.co/LRXxGpv";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Toxic Bot*

*bot making video* : _coming soon_

*owner id instagram* :https://instagram.com/toxic_turbo777?utm_medium=copy_link.

*github* : _coming soon_.

■□■□■□■□■□■□■□■□■□■□
       _*Toxic Bot*_
  ▣▣ created by Turbo ▣▣

`}) 

}));
