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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidnRpYkZtRlZLcGxpajdIdEE4ZXI5Tk44NXBTSURNaHZaQ09nRTNPOTVKdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZlVaUHowVFZTSnFHc3F2Q2d6LS1LQVwiLFxuICBcInBob25lSWRcIjogXCIwM2NjZjA4Mi1jNmMxLTQzODgtOWQxYy01NzFjMTllYzQyMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICA3NCxcbiAgICAgIDg0LFxuICAgICAgMTkzLFxuICAgICAgMixcbiAgICAgIDE0MCxcbiAgICAgIDIzMixcbiAgICAgIDEwMSxcbiAgICAgIDIxNSxcbiAgICAgIDIzOCxcbiAgICAgIDEsXG4gICAgICAxNjMsXG4gICAgICA5LFxuICAgICAgMTE4LFxuICAgICAgMTgxLFxuICAgICAgMTM4LFxuICAgICAgMTgxLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgNTksXG4gICAgICA4NixcbiAgICAgIDIyNCxcbiAgICAgIDEzOCxcbiAgICAgIDIwMSxcbiAgICAgIDE3MSxcbiAgICAgIDEzMyxcbiAgICAgIDIxOCxcbiAgICAgIDE1OCxcbiAgICAgIDI4LFxuICAgICAgMjA2LFxuICAgICAgOTUsXG4gICAgICAyMzEsXG4gICAgICAxNDUsXG4gICAgICA0NSxcbiAgICAgIDExOCxcbiAgICAgIDE5MyxcbiAgICAgIDc1LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpRRkhBRkFLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9zaF9HcmFwaGljc2Rlc2lnbi5GcmFtZXMgTHRkXCIsXG4gICAgXCJsaWRcIjogXCIxNzk4NzMyMzAzNzcxNzk6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZNcHM4RkVJL24wYk1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvVmljZTQremEreFh3Ukp6VnNHK1p0S2FYVXZyb3I4bXA4VXBtckg0cWprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm02Ykg1QmJjZm9LNnFxRG5xOGY3SjRrOFRKQ3FzRU1RbUk0bHBPdEZLbkZYN3RGa1pWcmQrQlZSVzB2aHhvMzBjN2E2M0ZCNzVUWkpIM2QrU3pEbEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpzdDFJMDhGSWdkbFpVektxV1BjUWtFRDFsN0UvT0dwb0JkbWZUb29MZmR4OE1pSVdtbk9BVi9vMlhpYm9nVnZ2TW84SFlZU1BIV0pWanVBM0RwaWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc2Mjc5Mzc6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5MDc3OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2Vy5qc29uIjogIntcImtleURhdGFcIjpcIk1HUGRmd2E0K0UvZnp5SHJLYitKU0hOY3BxaEZ6NGwxdk11d0h3KzZGRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDYwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcxMDgzODMxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
