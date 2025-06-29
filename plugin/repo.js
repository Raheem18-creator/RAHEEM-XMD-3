const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Display bot repository information",
    category: "main",
    react: "💀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const repo = await axios.get('https://api.github.com/repos/Raheem18-creator/RAHEEM-XMD-3');
        const { stargazers_count, forks_count } = repo.data;
        const userCount = forks_count * 5;

        const hackerMessage = `
┌──⧉『 💻 𝙍𝙀𝙋𝙊 𝙈𝙊𝘿𝙐𝙇𝙀 』⧉──┐
│
│  ☠️ 𝙃𝙚𝙡𝙡𝙤, 𝙃𝙖𝙘𝙠𝙚𝙧!
│
│  📂 *Repository:* RAHEEM-XMD-3 
│  ────────────────
│  ⭐ Stars       : ${stargazers_count}
│  🍴 Forks       : ${forks_count}
│  👥 Users       : ~${userCount}+ 
│
│  🔗 Repo URL:
│  github.com/Raheem18-creator/RAHEEM-XMD-3
│
│  🧠 About Bot:
│  A smart, modular, and 
│  lightweight WhatsApp MD Bot.
│
│  🧬 Status: ACTIVE
│  🛠️ Dev: Raheem Devs
│
│  💡 Tip:
│  Star + Fork = ❤️ Support
│
└──────────────────────────┘
        `;

        // Send hacker-styled repo info
        await conn.sendMessage(from, { text: hackerMessage }, { quoted: mek });

        // Send hacker image with context
        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/px3vuw.jpg` },
                caption: hackerMessage,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363290715861418@newsletter',
                        newsletterName: 'Raheem-xmd-3',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send voice note (PTT) hacker-style
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/t7ul1u.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error('❌ Repo Fetch Error:', error.message);
        await reply(`🛑 *Failed to fetch repository info!*\n> ${error.message}`);
    }
});
