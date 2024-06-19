const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_58_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEMyc3VDbS9ra3lFc1NnQ1BUR2R0Z0NjREMvZWRMeXl6MUcrTXhGN0h5cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTnJNaGVfRFBRaEdGOG5ZNFI0M1RfUVwiLFxuICBcInBob25lSWRcIjogXCIxYmJmZDEwOS1mMDA0LTQwZTUtODhlNC04MDhhNTFmZjgzZGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAzLFxuICAgICAgMjE5LFxuICAgICAgMjI1LFxuICAgICAgMjE0LFxuICAgICAgNzAsXG4gICAgICAxNjIsXG4gICAgICAxNTUsXG4gICAgICA2MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMSxcbiAgICAgIDg2LFxuICAgICAgMjAzLFxuICAgICAgMTQ4LFxuICAgICAgMTIzLFxuICAgICAgMTAwLFxuICAgICAgNzcsXG4gICAgICAxNTYsXG4gICAgICAxMzgsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMTAzLFxuICAgICAgMTE2LFxuICAgICAgMTMyLFxuICAgICAgNTQsXG4gICAgICAwLFxuICAgICAgNzEsXG4gICAgICA2OCxcbiAgICAgIDE3MixcbiAgICAgIDE3MSxcbiAgICAgIDExMixcbiAgICAgIDY2LFxuICAgICAgMTU0LFxuICAgICAgMTk1LFxuICAgICAgMjU1LFxuICAgICAgNDUsXG4gICAgICAyMzYsXG4gICAgICA4LFxuICAgICAgMTc3LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwxODVXQjI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU4MDE2MjA4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0Mjc5NDkwMzk1MzUyMjoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFZT01JREUg4p2k77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpoMzRvQ0VJR3B6Yk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvSmVmYWdCSzIrTUxKeExMU2d2YXF4c2FzWFltZ0RqUG00VHJRQzBpVHhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkg3YTVEUWdWWC81dU5HVmx6R3oyUXdBTisvNTdhSE93bWxRN1NDNDdoM1ZoY1RFY05oS041UkM3K1FJVFVNai9Fc2o3b251ZHJhSjdtbXBaaXFzQ0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYzUGV2a2NKMEZjY2FrR09WSlRFQzZFd3BKNFZndElVNk0ra1d1UURtamlYS1ZOQjRIelF2bTA5UkNNYUJaaWdUdGdlbWcyYVpjQ0tVZkJkUGRyUER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTgwMTYyMDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MzQzMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFOFVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU4VS5qc29uIjogIntcImtleURhdGFcIjpcIlVtYWJIL0JYa0Z6cU5JNUowOWhmeEQ2YUJsSkdmQXcwcnlDZk5ZYzMvYnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU5NDExNDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4MzMxMzQwNDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
