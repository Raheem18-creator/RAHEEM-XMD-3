const { cmd } = require('../command');
const axios = require('axios');

// Stylish reply template
function formatPairMessage(code, phoneNumber) {
    return `
╭───〔 *🤖 RAHEEM-XMD-3 PAIRING COMPLETE* 〕───⬣
│
├ 📞 *Phone:* ${phoneNumber}
├ 🔑 *Pairing Code:* 
│   ⤷ \`\`\`${code}\`\`\`
│
╰─────────────◆
⚠️ *NOTE:* Scan this code in your WhatsApp MD Session Auth!
`;
}

// Reusable command logic
async function handlePairCommand(conn, mek, m, context, reply) {
    const { q, senderNumber } = context;

    const phoneNumber = q ? q.trim() : senderNumber;

    if (!phoneNumber || !phoneNumber.match(/^\+?\d{10,15}$/)) {
        return await reply("❌ Please provide a valid phone number with country code\nExample: .pair +25473229XXX");
    }

    try {
        const response = await axios.get(`https://popkidsessgenerator.onrender.com/pair?phone=${encodeURIComponent(phoneNumber)}`);

        if (!response.data || !response.data.code) {
            return await reply("❌ Failed to retrieve pairing code. Please try again later.");
        }

        const pairingCode = response.data.code;

        // Send stylized response
        await reply(formatPairMessage(pairingCode, phoneNumber));

        // Delay then send code again plainly
        await new Promise(resolve => setTimeout(resolve, 2000));
        await reply(`${pairingCode}`);

    } catch (error) {
        console.error("Pair command error:", error);
        await reply("❌ An error occurred while getting pairing code. Please try again later.");
    }
}

// Register both .pair and .pair2 commands
["pair", "pair2"].forEach((pattern) => {
    cmd({
        pattern,
        alias: [pattern === "pair" ? "getpair" : "getpair2", pattern === "pair" ? "clonebot" : "clonebot2"],
        react: "✅",
        desc: "Get pairing code for RAHEEM-XMD-3 bot",
        category: "download",
        use: ".pair +255763111XXX",
        filename: __filename
    }, async (conn, mek, m, context) => {
        await handlePairCommand(conn, mek, m, context, context.reply);
    });
});
