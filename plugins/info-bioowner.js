let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Cxyoo Botz
*✉️ Nama RL* : Steven Lim
*♂️ Gender* : Laki - laki
*🕋 Agama* : Kristen
*⏰ Tanggal lahir* : 27 April 2008
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot, Coder, Ngegame 
*💬 Sifat* : Idiot, Tidak Ramah, Prik, Pedofil
*🗺️ Tinggal* : Indonesia, Kalimantan Selatan, Banjarmasin
*❤️ Suka* : warnah hitam & Ungu, anime, ML, Tiktok, Ovt, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @zyn.mood_
*🇫  Facebook* : -
*🏮 Chanel Youtube* : Zyen YT
*🐈 Github:* istvnbotz

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler