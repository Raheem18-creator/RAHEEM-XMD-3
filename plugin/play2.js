const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    alias: ["play2"],
    react: "🎼",
    desc: "Download high-quality music",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*🌀𝗘𝗥𝗥𝗢𝗥! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘀𝗼𝗻𝗴 𝗻𝗮𝗺𝗲 𝗼𝗿 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸🌊*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
✦♬♪♫𝓢𝓞𝓝𝓖-𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡♫♪♬✦

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

❖  𝕿𝖎𝖙𝖑𝖊:  『${deta.title}』

✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧

📜  𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓: 
『${deta.description}』

✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧

⏳  𝕿𝖎𝖒𝖊𝖘𝖙𝖆𝖒𝖕:  ${deta.timestamp}

🕒  𝕬𝖌𝖔:  ${deta.ago}

👁️  𝖁𝖎𝖊𝖜𝖘:  ${deta.views}

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

✨  𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 RAHEEM18-CREATOR ✨
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

// Download audio+document
const res = await fetch(`https://api.davidcyriltech.my.id/youtube/mp3?url=${url}`);
const data = await res.json();
if (!data.success) return reply("🌀𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗶𝗹𝗲𝗱! 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻🌊");

let downloadUrl = data.result.downloadUrl;

// Send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"🎧 𝗠𝘂𝘀𝗶𝗰 𝗯𝘆 𝗣𝗼𝗽𝗸𝗶𝗱 𝗠𝗗 🌟"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:deta.title + ".mp3" ,caption :"📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘄𝗶𝘁𝗵 𝗣𝗼𝗽𝗸𝗶𝗱 𝗠𝗗 💫"},{quoted:mek})

}catch(e){
console.log(e)
reply(`🌀𝗘𝗥𝗥𝗢𝗥! ${e} 🌊`)
}
})

// ======== VIDEO DL ========
cmd({
    pattern: "video2",
    react: "🎬",
    desc: "Download HD videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*🌀𝗘𝗥𝗥𝗢𝗥! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗶𝗱𝗲𝗼 𝗻𝗮𝗺𝗲 𝗼𝗿 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸🌊*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
✦𝓥𝓘𝓓𝓔𝓞-𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡 ✦

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

❖  𝕿𝖎𝖙𝖑𝖊:  『${deta.title}』

✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧

📜  𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓: 
『${deta.description}』

✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧⋄⋆⋅⋅⋅⋆⋄✧

⏳  𝕿𝖎𝖒𝖊𝖘𝖙𝖆𝖒𝖕:  ${deta.timestamp}

🕒  𝕬𝖌𝖔:  ${deta.ago}

👁️  𝖁𝖎𝖊𝖜𝖘:  ${deta.views}

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

✨  𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 RAHEEM18-CREATOR ✨
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

// Download video+document
const res = await fetch(`https://api.davidcyriltech.my.id/youtube/mp3?url=${url}`);
const data = await res.json();
if (!data.success) return reply("🌀𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗶𝗹𝗲𝗱! 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻🌊");

let downloadUrl = data.result.downloadUrl;

// Send video message
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"🎥 𝗩𝗶𝗱𝗲𝗼 𝗯𝘆 raheem X𝗠𝗗 3 🌟"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:deta.title + ".mp4",caption :"📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘄𝗶𝘁𝗵 raheevym X𝗠𝗗 3 and 💫"},{quoted:mek})

}catch(e){
console.log(e)
reply(`🌀𝗘𝗥𝗥𝗢𝗥! ${e} 🌊`)
}
})
