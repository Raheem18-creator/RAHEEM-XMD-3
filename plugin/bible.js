const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "fun",
    react: "📖",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Check if a reference is provided
        if (args.length === 0) {
            return reply(`⚠️ *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:1`);
        }

        // Join the arguments to form the reference
        const reference = args.join(" ");
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // Handle possible API error message
        if (response.data.error) {
            return reply(`❌ *Error:* ${response.data.error}`);
        }

        // Check if response contains text
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;
            const verseText = text.trim();

            // Send beautifully formatted output
            reply(
                `╔══════════════════════════════╗\n` +
                `       📖 *𝐁𝐈𝐁𝐋𝐄 𝐕𝐄𝐑𝐒𝐄*        \n` +
                `╚══════════════════════════════╝\n\n` +
                `🔹 *Reference:* ${ref}\n` +
                `🔸 *Translation:* ${translation_name}\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `📜 *𝐕𝐄𝐑𝐒𝐄 𝐓𝐄𝐗𝐓:*\n\n${verseText}\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `❤️Taja jina lako🙌 𝐁𝐈𝐁𝐋𝐄🌎`
            );
        } else {
            reply("❌ *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("⚠️ *An error occurred while fetching the Bible verse.* Please try again later.");
    }
});
