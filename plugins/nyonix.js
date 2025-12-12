const config = require('../config');
const { getTime, getDate, getUptime, color } = require('../libs/functions');
const fs = require('fs');

module.exports = {
    name: 'menu4',
    alias: ['help', 'cmd', 'commands', 'allmenu', 'list', 'm', 'start'],
    desc: 'Show all available commands with categories',
    category: 'Utility',
    
    async execute({ sock, jid, user, args }) {
        const prefix = config.prefix;
        const time = getTime();
        const date = getDate();
        const uptime = getUptime();
        
        // Check if specific menu page requested
        const page = args[0] || 'main';
        
        // MENU DESIGNS
        const menus = {
            // MAIN MENU
            main: `
╭───《 🚀 ${config.botName.toUpperCase()} 》───╮
│ 👑 *Owner:* ${config.author}
│ ⚙️ *Mode:* PUBLIC
│ 💻 *Platform:* GitHub/NodeJs
│ 🌐 *Baileys:* Multi Device
│ 🔖 *Prefix:* ${prefix}
│ 💎 *Version:* ${config.version}
│ ⏰ *Time:* ${time}
│ 📅 *Date:* ${date}
│ 🕒 *Uptime:* ${uptime}
╰─────────────────────────╯

📌 *QUICK ACCESS:*
┌─────────────────────────
│ ${prefix}menu2   - Download Menu
│ ${prefix}menu3   - Group Menu  
│ ${prefix}menu4   - Fun & Games
│ ${prefix}menu5   - AI & Tools
│ ${prefix}menu6   - Media Tools
│ ${prefix}menu7   - Owner Panel
│ ${prefix}menu8   - All Commands
└─────────────────────────

🏠 *MAIN COMMANDS:*
┌─────────────────────────
│ ${prefix}ping    - Bot Speed
│ ${prefix}alive   - Bot Status
│ ${prefix}speed   - Network Test
│ ${prefix}owner   - Contact Owner
│ ${prefix}info    - Bot Info
│ ${prefix}support - Support
│ ${prefix}runtime - Runtime Info
│ ${prefix}uptime  - Uptime Check
│ ${prefix}repo    - Source Code
└─────────────────────────

🎮 *QUICK ACTIONS:*
• ${prefix}sticker - Make sticker
• ${prefix}tiktok <url> - Download
• ${prefix}play <song> - Music
• ${prefix}ai <question> - Ask AI
• ${prefix}joke - Random joke

📞 *Support:* ${config.contact.phone}
🤖 *Powered by:* ${config.botName}
            `,
            
            // DOWNLOAD MENU (menu2)
            menu2: `
╭──《 📥 DOWNLOAD MENU 》──╮
│ 📱 *Media Downloader*
╰──────────────────────╯

🎬 *VIDEO DOWNLOADER:*
┌─────────────────────────
│ ${prefix}tiktok <url> - TikTok
│ ${prefix}yt <url>     - YouTube
│ ${prefix}fb <url>     - Facebook
│ ${prefix}ig <url>     - Instagram
│ ${prefix}twitter <url> - Twitter
│ ${prefix}likee <url>  - Likee
│ ${prefix}snack <url>  - SnackVideo
│ ${prefix}twitch <url> - Twitch
│ ${prefix}dailymotion  - DailyMotion
└─────────────────────────

🎵 *AUDIO/MUSIC:*
┌─────────────────────────
│ ${prefix}play <song>  - Search
│ ${prefix}ytmp3 <url>  - MP3
│ ${prefix}ytmp4 <url>  - MP4
│ ${prefix}spotify <url> - Spotify
│ ${prefix}audio <url>  - Audio
│ ${prefix}song <name>  - Song
│ ${prefix}video <name> - Video
└─────────────────────────

📁 *FILE DOWNLOAD:*
┌─────────────────────────
│ ${prefix}mediafire <url>
│ ${prefix}gdrive <url>
│ ${prefix}pinterest <url>
│ ${prefix}apk <name>   - APK
│ ${prefix}img <query>  - Images
│ ${prefix}ssweb <url>  - Screenshot
└─────────────────────────

💡 *Tips:* Send link only
🔗 *Example:* ${prefix}tiktok https://tiktok.com/...
            `,
            
            // GROUP MENU (menu3)
            menu3: `
╭──《 👥 GROUP MENU 》──╮
│ 🛡️ *Group Management*
╰─────────────────────╯

👑 *ADMIN COMMANDS:*
┌─────────────────────────
│ ${prefix}add <number>  - Add user
│ ${prefix}kick @tag     - Remove user
│ ${prefix}promote @tag  - Make admin
│ ${prefix}demote @tag   - Remove admin
│ ${prefix}mute          - Mute group
│ ${prefix}unmute        - Unmute group
│ ${prefix}lockgc        - Lock group
│ ${prefix}unlockgc      - Unlock group
│ ${prefix}setwelcome <text>
│ ${prefix}setgoodbye <text>
│ ${prefix}updategname <name>
│ ${prefix}updategdesc <text>
└─────────────────────────

📊 *GROUP INFO:*
┌─────────────────────────
│ ${prefix}ginfo         - Group info
│ ${prefix}getpic        - Group picture
│ ${prefix}listadmin     - Admin list
│ ${prefix}tagall        - Tag all members
│ ${prefix}tagadmins     - Tag admins
│ ${prefix}hidetag <msg> - Hidden tag
│ ${prefix}grouplink     - Group link
│ ${prefix}revoke        - Reset link
│ ${prefix}invite <num>  - Invite
└─────────────────────────

⚙️ *SETTINGS:*
┌─────────────────────────
│ ${prefix}disappear on/off
│ ${prefix}disappear 24h/7d
│ ${prefix}antilink on/off
│ ${prefix}antivirtex on/off
│ ${prefix}welcome on/off
│ ${prefix}goodbye on/off
└─────────────────────────

⚠️ *OWNER ONLY:*
• ${prefix}kickall - Remove all
• ${prefix}dismiss - Delete group
            `,
            
            // FUN & GAMES (menu4)
            menu4: `
╭──《 🎉 FUN & GAMES 》──╮
│ 🎮 *Entertainment*
╰─────────────────────╯

😄 *FUN COMMANDS:*
┌─────────────────────────
│ ${prefix}joke      - Random joke
│ ${prefix}fact      - Interesting fact
│ ${prefix}quote     - Motivational
│ ${prefix}insult    - Roast someone
│ ${prefix}ship @tag - Ship people
│ ${prefix}hack @tag - Fake hack
│ ${prefix}rate @tag - Rate 1-10
│ ${prefix}pickup    - Pickup line
│ ${prefix}character - Anime character
└─────────────────────────

🎲 *GAMES:*
┌─────────────────────────
│ ${prefix}math <equation>
│ ${prefix}roll <1-100>
│ ${prefix}dice        - Roll dice
│ ${prefix}coin        - Flip coin
│ ${prefix}slot        - Slot machine
│ ${prefix}guess       - Number guess
│ ${prefix}quiz        - Trivia quiz
│ ${prefix}wordchain   - Word game
│ ${prefix}tic-tac-toe - Play with bot
└─────────────────────────

🎭 *REACTIONS:*
┌─────────────────────────
│ ${prefix}hug @tag
│ ${prefix}kiss @tag
│ ${prefix}pat @tag
│ ${prefix}slap @tag
│ ${prefix}poke @tag
│ ${prefix}cuddle @tag
│ ${prefix}bully @tag
│ ${prefix}lick @tag
│ ${prefix}bite @tag
│ ${prefix}kill @tag
└─────────────────────────

😊 *EMOTION:*
• ${prefix}happy • ${prefix}sad
• ${prefix}angry • ${prefix}shy
• ${prefix}blush • ${prefix}cry
• ${prefix}smile • ${prefix}wave
            `,
            
            // AI & TOOLS (menu5)
            menu5: `
╭──《 🤖 AI & TOOLS 》──╮
│ 🧠 *Artificial Intelligence*
╰─────────────────────╯

🤖 *AI CHAT:*
┌─────────────────────────
│ ${prefix}ai <question>
│ ${prefix}gpt <question>
│ ${prefix}gpt3 <question>
│ ${prefix}gpt4 <question>
│ ${prefix}bard <question>
│ ${prefix}bing <question>
│ ${prefix}blackbox <query>
│ ${prefix}meta <question>
│ ${prefix}copilot <query>
│ ${prefix}luma <question>
│ ${prefix}dj <question>
│ ${prefix}khan <question>
└─────────────────────────

🎨 *AI IMAGE:*
┌─────────────────────────
│ ${prefix}imagine <prompt>
│ ${prefix}aiimg <prompt>
│ ${prefix}dalle <prompt>
│ ${prefix}midjourney <prompt>
│ ${prefix}stablediffusion
│ ${prefix}animeai <prompt>
│ ${prefix}logo <text>
│ ${prefix}textpro <text>
└─────────────────────────

🔧 *TOOLS:*
┌─────────────────────────
│ ${prefix}calculator <math>
│ ${prefix}weather <city>
│ ${prefix}news <topic>
│ ${prefix}movie <name>
│ ${prefix}define <word>
│ ${prefix}wikipedia <topic>
│ ${prefix}translate <text>
│ ${prefix}currency <amount>
│ ${prefix}time <city>
│ ${prefix}date <country>
│ ${prefix}count <text>
│ ${prefix}tinyurl <url>
└─────────────────────────

📱 *STALKING:*
• ${prefix}githubstalk <user>
• ${prefix}instastalk <username>
• ${prefix}tiktokstalk <user>
            `,
            
            // MEDIA TOOLS (menu6)
            menu6: `
╭──《 🎨 MEDIA TOOLS 》──╮
│ ✨ *Media Processing*
╰─────────────────────╯

🖼️ *STICKER MAKER:*
┌─────────────────────────
│ ${prefix}sticker - From image
│ ${prefix}sticker2 - From video
│ ${prefix}attp <text> - Text sticker
│ ${prefix}emojimix 😀+😂
│ ${prefix}take <name> - Sticker pack
│ ${prefix}wm <text> - Watermark
│ ${prefix}toimg - Sticker to image
│ ${prefix}tomp3 - Video to audio
└─────────────────────────

🎬 *VIDEO/AUDIO:*
┌─────────────────────────
│ ${prefix}tts <text> - Text to speech
│ ${prefix}trt <text> - Translate
│ ${prefix}enhance - Quality upscale
│ ${prefix}slowmo - Slow motion
│ ${prefix}reverse - Reverse video
│ ${prefix}compress - Reduce size
│ ${prefix}merge - Merge videos
│ ${prefix}cut <time> - Cut video
└─────────────────────────

🔤 *TEXT TOOLS:*
┌─────────────────────────
│ ${prefix}fancy <text>
│ ${prefix}glitch <text>
│ ${prefix}neon <text>
│ ${prefix}shadow <text>
│ ${prefix}flame <text>
│ ${prefix}blood <text>
│ ${prefix}metal <text>
│ ${prefix}graffiti <text>
│ ${prefix}write <text>
└─────────────────────────

🔄 *CONVERTERS:*
• ${prefix}base64 <text>
• ${prefix}unbase64 <code>
• ${prefix}binary <text>
• ${prefix}dbinary <code>
• ${prefix}hex <text>
• ${prefix}decimal <number>
            `,
            
            // OWNER PANEL (menu7)
            menu7: `
╭──《 👑 OWNER PANEL 》──╮
│ ⚠️ *Owner Commands Only*
╰─────────────────────╯

🔧 *BOT CONTROL:*
┌─────────────────────────
│ ${prefix}restart - Restart bot
│ ${prefix}shutdown - Stop bot
│ ${prefix}update - Update bot
│ ${prefix}backup - Backup data
│ ${prefix}broadcast <msg>
│ ${prefix}bcgroup <msg>
│ ${prefix}setprefix <new>
│ ${prefix}setname <name>
│ ${prefix}setbio <bio>
│ ${prefix}setpp - Set bot profile
│ ${prefix}fullpp - Full size pp
└─────────────────────────

👥 *USER CONTROL:*
┌─────────────────────────
│ ${prefix}block <number>
│ ${prefix}unblock <number>
│ ${prefix}ban @tag
│ ${prefix}unban @tag
│ ${prefix}listban
│ ${prefix}listblock
│ ${prefix}gjid - Get group jid
│ ${prefix}jid @tag - Get user jid
└─────────────────────────

📊 *STATISTICS:*
┌─────────────────────────
│ ${prefix}stats - Bot stats
│ ${prefix}users - User count
│ ${prefix}groups - Group count
│ ${prefix}commands - Command stats
│ ${prefix}logs - View logs
│ ${prefix}errorlog - Error logs
│ ${prefix}status - Full status
│ ${prefix}listcmd - All commands
└─────────────────────────

⚙️ *SYSTEM:*
• ${prefix}eval <code>
• ${prefix}exec <terminal>
• ${prefix}cleartmp - Clear temp
• ${prefix}clearsession - Clear session
            `,
            
            // ALL COMMANDS (menu8)
            menu8: `
╭──《 📋 ALL COMMANDS 》──╮
│ 📚 *Complete Command List*
╰─────────────────────╯

🏠 *UTILITY (12):*
• ${prefix}ping • ${prefix}speed • ${prefix}alive
• ${prefix}owner • ${prefix}menu • ${prefix}help
• ${prefix}info • ${prefix}support • ${prefix}repo
• ${prefix}runtime • ${prefix}uptime • ${prefix}status

📥 *DOWNLOADER (25):*
• ${prefix}tiktok • ${prefix}yt • ${prefix}fb
• ${prefix}ig • ${prefix}twitter • ${prefix}likee
• ${prefix}snack • ${prefix}play • ${prefix}ytmp3
• ${prefix}ytmp4 • ${prefix}spotify • ${prefix}audio
• ${prefix}video • ${prefix}song • ${prefix}mediafire
• ${prefix}gdrive • ${prefix}pinterest • ${prefix}apk
• ${prefix}img • ${prefix}ssweb • ${prefix}tt2
• ${prefix}fb2 • ${prefix}pins • ${prefix}apk2

👥 *GROUP (35):*
• ${prefix}add • ${prefix}kick • ${prefix}promote
• ${prefix}demote • ${prefix}mute • ${prefix}unmute
• ${prefix}lockgc • ${prefix}unlockgc • ${prefix}setwelcome
• ${prefix}setgoodbye • ${prefix}ginfo • ${prefix}getpic
• ${prefix}tagall • ${prefix}tagadmins • ${prefix}hidetag
• ${prefix}grouplink • ${prefix}revoke • ${prefix}invite
• ${prefix}updategname • ${prefix}updategdesc • ${prefix}disappear
• ${prefix}antilink • ${prefix}antivirtex • ${prefix}welcome
• ${prefix}goodbye • ${prefix}dismiss • ${prefix}kickall
• ${prefix}listadmin • ${prefix}senddm • ${prefix}nikal

🎮 *FUN & GAMES (30):*
• ${prefix}joke • ${prefix}fact • ${prefix}quote
• ${prefix}insult • ${prefix}ship • ${prefix}hack
• ${prefix}rate • ${prefix}pickup • ${prefix}character
• ${prefix}math • ${prefix}roll • ${prefix}dice
• ${prefix}coin • ${prefix}slot • ${prefix}guess
• ${prefix}quiz • ${prefix}wordchain • ${prefix}hug
• ${prefix}kiss • ${prefix}pat • ${prefix}slap
• ${prefix}poke • ${prefix}cuddle • ${prefix}bully
• ${prefix}lick • ${prefix}bite • ${prefix}kill

🤖 *AI & TOOLS (40):*
• ${prefix}ai • ${prefix}gpt • ${prefix}gpt3
• ${prefix}gpt4 • ${prefix}bard • ${prefix}bing
• ${prefix}blackbox • ${prefix}meta • ${prefix}copilot
• ${prefix}luma • ${prefix}dj • ${prefix}khan
• ${prefix}imagine • ${prefix}aiimg • ${prefix}dalle
• ${prefix}midjourney • ${prefix}stablediffusion
• ${prefix}animeai • ${prefix}logo • ${prefix}textpro
• ${prefix}calculator • ${prefix}weather • ${prefix}news
• ${prefix}movie • ${prefix}define • ${prefix}wikipedia
• ${prefix}translate • ${prefix}currency • ${prefix}time
• ${prefix}date • ${prefix}count • ${prefix}tinyurl
• ${prefix}githubstalk • ${prefix}instastalk • ${prefix}tiktokstalk

🎨 *MEDIA (25):*
• ${prefix}sticker • ${prefix}sticker2 • ${prefix}attp
• ${prefix}emojimix • ${prefix}take • ${prefix}wm
• ${prefix}toimg • ${prefix}tomp3 • ${prefix}tts
• ${prefix}trt • ${prefix}enhance • ${prefix}slowmo
• ${prefix}reverse • ${prefix}compress • ${prefix}merge
• ${prefix}cut • ${prefix}fancy • ${prefix}glitch
• ${prefix}neon • ${prefix}shadow • ${prefix}flame
• ${prefix}blood • ${prefix}metal • ${prefix}graffiti
• ${prefix}write • ${prefix}base64 • ${prefix}unbase64
• ${prefix}binary • ${prefix}dbinary • ${prefix}hex
• ${prefix}decimal

👑 *OWNER (20):*
• ${prefix}restart • ${prefix}shutdown • ${prefix}update
• ${prefix}backup • ${prefix}broadcast • ${prefix}bcgroup
• ${prefix}setprefix • ${prefix}setname • ${prefix}setbio
• ${prefix}setpp • ${prefix}fullpp • ${prefix}block
• ${prefix}unblock • ${prefix}ban • ${prefix}unban
• ${prefix}listban • ${prefix}listblock • ${prefix}gjid
• ${prefix}jid • ${prefix}stats • ${prefix}users
• ${prefix}groups • ${prefix}commands • ${prefix}logs
• ${prefix}errorlog • ${prefix}listcmd • ${prefix}eval
• ${prefix}exec • ${prefix}cleartmp • ${prefix}clearsession

📊 *TOTAL COMMANDS:* 150+
🔖 *PREFIX:* ${prefix}
📞 *SUPPORT:* ${config.contact.phone}
🤖 *BOT:* ${config.botName} v${config.version}
            `
        };
        
        // Send appropriate menu
        const menuText = menus[page] || menus.main;
        
        await sock.sendMessage(jid, { 
            text: menuText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: `${config.botName} ULTRA PRO MENU`,
                    body: `Page: ${page.toUpperCase()} • Commands: 150+`,
                    thumbnail: await (async () => {
                        try {
                            // You can add a thumbnail image here
                            return null;
                        } catch (e) {
                            return null;
                        }
                    })(),
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
        
        // Send footer for multi-page menus
        if (page === 'main') {
            await sock.sendMessage(jid, {
                text: `📚 *MULTI-PAGE MENU*\n\n` +
                      `Use these commands to navigate:\n` +
                      `• ${prefix}menu2 - Download Menu\n` +
                      `• ${prefix}menu3 - Group Menu\n` +
                      `• ${prefix}menu4 - Fun & Games\n` +
                      `• ${prefix}menu5 - AI & Tools\n` +
                      `• ${prefix}menu6 - Media Tools\n` +
                      `• ${prefix}menu7 - Owner Panel\n` +
                      `• ${prefix}menu8 - All Commands\n\n` +
                      `📞 *Support:* ${config.contact.phone}`
            });
        }
    }
};
