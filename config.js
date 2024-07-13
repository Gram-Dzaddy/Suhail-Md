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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Ins9rYYJc3X1vLJ98lXkOT";
global.website=process.env.GURL || "https://chat.whatsapp.com/Ins9rYYJc3X1vLJ98lXkOT" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254791756897";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254791756897";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkdWVuam0wdFZTSU8wQ0lEbDhwQVFyMEovc3YwSXZXdnlvbXUvb2lKSFdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwMUNlYjVqcVJ5RzhtQ0VWVEQyUURRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2NjQ3YzkwLTU3ZDgtNDNhOS05ODNhLTU3OTE1YTU4OWE4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxNzgsXG4gICAgICA2NCxcbiAgICAgIDExMCxcbiAgICAgIDM4LFxuICAgICAgMTAxLFxuICAgICAgMTU0LFxuICAgICAgNzIsXG4gICAgICAxOTMsXG4gICAgICAzMCxcbiAgICAgIDQ0LFxuICAgICAgMjgsXG4gICAgICAyNTIsXG4gICAgICAxNzYsXG4gICAgICAyMjgsXG4gICAgICAyMixcbiAgICAgIDYzLFxuICAgICAgNzMsXG4gICAgICAxMTUsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICAyNTMsXG4gICAgICA0NyxcbiAgICAgIDE0NixcbiAgICAgIDIzNSxcbiAgICAgIDE4MSxcbiAgICAgIDE3NyxcbiAgICAgIDIwNSxcbiAgICAgIDIwNixcbiAgICAgIDQyLFxuICAgICAgMTUzLFxuICAgICAgMjA4LFxuICAgICAgMTE5LFxuICAgICAgODksXG4gICAgICAyMDksXG4gICAgICA2MixcbiAgICAgIDIxNyxcbiAgICAgIDQsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjROWlQ0UFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MTc1Njg5Nzo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1NDc1MTU5MDkzMzg3OjY4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXVW5Qc0JFSnVGeXJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGNaNzhtMTFkb1U0OTRRa2htbk5oUWt0NjZRSGNqa1R3UzBETEcyR20xRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6OU9DbGJHZVdIYWZxMklmcGdLeVNPc1RmUlJVSVhIbVJhSzFIempRQ3l0MGxid0h0UnNmc0h1Z3p4dHRSWDBQR0sxYkJsb1FHWEtCeHBTbnFCMUhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrdEg3eFhreVhvMFZpTDFCa2NnOVJQcTlzenVsMTdOMjJ0RWpXbS9LaGdtSVIvMGNrUGFoY2lzWGVhMW1ScGlwQ0pBNDQxeEVwZWxHMVhybUJIWEtBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTE3NTY4OTc6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODc3NzMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Gram Dzaddy ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GramDzaddy",
  ownername:process.env.OWNER_NAME|| "Gram Dzaddy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
