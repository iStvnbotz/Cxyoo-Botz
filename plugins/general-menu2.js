import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ Cxyoo Botz,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ Stvn,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴅɪ ᴅᴜɴɪᴀ ʙᴏᴛ,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://www.youtube.com/channel/UCZ_GA4pb1Hjsh9Bm9Ul7LgQ', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇʜ ꜱᴀᴍɴɢᴇ ᴅᴇɴɢᴀɴ ᴀɴɪᴍᴇʜ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler