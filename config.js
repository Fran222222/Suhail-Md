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
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_09_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMCtBbS9vbDdEdkYyVkJUZWFJWjBLOHhtbkU5Z05nYi9oVHVObHBLc3owbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDg3NjI3OTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRjQ3MTRCN0ZDNkMyMjc0RTA3RTVBRjFDRTExRDMyOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1OTA5OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjN3eXQzYmhUeVNlWFBWTmZ1V1p4d1wiLFxuICBcInBob25lSWRcIjogXCI4ZDJjNmViYy1jMjdjLTRhZWEtYmY1Ni1mYmRmMjVkZGJjODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMTM2LFxuICAgICAgMTIwLFxuICAgICAgMTUzLFxuICAgICAgMTMxLFxuICAgICAgMTAzLFxuICAgICAgMjU0LFxuICAgICAgMTU4LFxuICAgICAgMTAxLFxuICAgICAgMjE5LFxuICAgICAgMTM4LFxuICAgICAgMjQxLFxuICAgICAgMjQyLFxuICAgICAgMTY0LFxuICAgICAgNDQsXG4gICAgICA1MSxcbiAgICAgIDE3MCxcbiAgICAgIDk5LFxuICAgICAgMjEyLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNzMsXG4gICAgICAyMjEsXG4gICAgICAxMDAsXG4gICAgICAyMTQsXG4gICAgICAxMTgsXG4gICAgICAxMDMsXG4gICAgICA2MSxcbiAgICAgIDEzOSxcbiAgICAgIDE2OSxcbiAgICAgIDIwNixcbiAgICAgIDE3MixcbiAgICAgIDIwNCxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICAxOTEsXG4gICAgICA3OSxcbiAgICAgIDI0MyxcbiAgICAgIDE4OSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2U1dIRVNBQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4NzYyNzkzNzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvc2hfR3JhcGhpY3NkZXNpZ24uRnJhbWVzIEx0ZFwiLFxuICAgIFwibGlkXCI6IFwiMTc5ODczMjMwMzc3MTc5OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqTXBzOEZFTWpBKzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1ZpY2U0K3phK3hYd1JKelZzRytadEthWFV2cm9yOG1wOFVwbXJINHFqaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZSkptazRDcjdhZWRyRDBYTWdPN1JVcHRVdy9pdHBOWTFCS0V0ZElzdzRBWklXeWZ6U2Z3dmhwQXFkOWI5T2djOVc0UWUvZTI5WEVwYU4rc3hWdHNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6U2RMYUR5czhab0x2Z0p4Vk1JOFRGMzNiamtUMk1WRXh5Qy84bGtJZUh4RTZqZm1OVXR6eFF5SVFDTk5IV1ExaUgrNXlwbWZlbllWQko2amhhYnpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg3NjI3OTM3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTkwOTkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDZXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQNlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNR1BkZndhNCtFL2Z6eUhyS2IrSlNITmNwcWhGejRsMXZNdXdIdys2RkZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDg0ODQ2MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MTA4MzgzMTBcIn0iCn0="  // PUT your SESSION_ID 


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
