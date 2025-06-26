const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uAJlCahS#FfnIM5EJ4hzwZivaewh1t1wjjm0foc7TX2JvjKO42QM", // Add your session id
PREFIX: process.env.PREFIX || "'",
OWNER_NUMBER: process.env.OWNER_NUMBER || "18293511531",
DEV: process.env.DEV || "94779062397",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ᴊᴜꜱᴛ ɴᴏᴡ ꜱᴇᴇɴ ʙʏ ʟᴀʀᴀ ᴍᴅ`_* 💃🏻",
MODE: process.env.MODE || "public",  //public | private | inbox | group
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true",    
AUTO_REACT: process.env.AUTO_REACT || "false",
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_VV: process.env.ANTI_VV || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
