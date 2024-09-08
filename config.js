//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5kY0RsTk9KZzFrTGRkQ04yOXpRR0pEemdMdzh3QlVLNFdpSWdSay9Ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzBqNGwwVWR3S05NY3pHRGxhcFlhQ2lwQWZFeVlBWXdRb202U1BkOUR6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T0RpS1Z0cjB3NFcxT25BamV5NUlkcXhqV1I1ODBqSitzQktDUCtaNDE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLMWhldUhyWmR5UmRVQkNSWEFTSWwyMk9DODN6cmZ6TFRhUTEzT2VmSDJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIYXU4cDBOWjdJaUZmQUxFVXM0S2kyS0xuSGRBUnVyQ0tndmFjeFdnMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd5dXRGNVNHa0hLbWRpOTJsWVhGZ3MrZ2Jpb0VVbDNFSW9QQmxaSkZqaVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1AxT0NmWlN4MFkzMC9VWk1LRXBJMFV1OVBPVThtOEU3RlRGcnJ6czNIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRS9CR0JXZTNNUTJVVWVsNnVYdGpGN29TUEVjOUIyYldvTmRSQWZ0Q1B6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxWNG1SeGk3b3dUcW9NT3Q1Y0RyL0ltQmhadnNNSytjbXF6ekxFaE5ZaUJSZnh2RU5wZElWeUhydkNUTldnK0RwU0JURkZsZUhCaW5ZRmlwbFNYRmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6Ikc0WEs4eXhhdWhGRTFVd0hXRnplbFdta0svV2FDbTZIYnpSWVowOVN1Z1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Nzg1ODcxNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDYxMkNFMENCMDVFMkIwNTc4RkVFNzRFQzg3RUFDNjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTgyMTY3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMS1lN2JESG5SZUdnUjY5YXd1NVRCdyIsInBob25lSWQiOiJkNDJlMWY2Yi0yOGRhLTQzNjctOWMyOS1hMDMxNTRiZWEyN2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tNdmNySVFrQi9TNDJycGhHTjJva2F6V2VrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZQT2E4dzRYelNPcmpKVUhvSHNXdFZ2RUtqND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRUTFYMUpEUCIsIm1lIjp7ImlkIjoiOTQ3Nzg1ODcxNzY6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi1IvOscm+yoLUi86xIMqCzrHJsc6xybMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1SGp0c0ZFT0RsOTdZR0dCSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitZTHQ2OHd3Um5xU1hMU1c2NTl3RWhLRExwcDgvRXczY2lPY2xnd0w4azQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhqdFFTVmNvY243R3hDaEQzbEJsZlk1LzhXRW1IL3hpRXEyK0tXWWJORU0xemhDUlVTWXJJZnlaVVF4ZDU2aTRMWXlpb2p0WEM0QUxhUnZ2S01veERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFMzJKRDh3b1VaVGZ0T0Rud1FxMVRXNmRzeUFyVmhkYUw4WUhKaVFyVWRRUkMyQ3NnREh0bUJYTU5QU1NtUUlxeHNaWjFrNGlFTFlxUkdtcnZlNzlpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc4NTg3MTc2OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZtQzdldk1NRVo2a2x5MGx1dWZjQklTZ3k2YWZQeE1OM0lqbkpZTUMvSk8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU4MjE2NzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTJsIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
