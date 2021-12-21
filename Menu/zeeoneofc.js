exports.allmenu = (wib, wit, wita, namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`☞︎︎︎ Hello ${pushname}🤗 Saya ${namabot}😎

┏━━━━━━━━━━━━⬣ 
┃⬡ saya akan mempermudah hidup 
┃⬡ anda dengan membuat logo coffe
┃⬡ dan lain lain didalam WhatsApp
┃⬡ juga bisa untuk mengelola group
┃⬡ anda ikuti petunjuk di bawah ini 
┃⬡ untuk memerintah
┗━━━━━━━━━━━━⬣

┏━━⬣ *𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀 𝐓𝐈𝐌𝐄*
┃𝐖𝐢𝐛 : ${wib} 𝐖𝐈𝐁
┃𝐖𝐢𝐭 : ${wit} 𝐖𝐈𝐓
┃𝐖𝐢𝐭𝐚 : ${wita} 𝐖𝐈𝐓𝐀
┗━━━━━━━━━━━━⬣
┏━━⬣ *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*
┃𝐍𝐚𝐦𝐚 : ${pushname} 
┃𝐍𝐨𝐦𝐨𝐫 : @${sender.split("@")[0]} 
┃𝐒𝐭𝐚𝐭𝐮𝐬 : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
┃𝐄𝐱𝐩𝐢𝐫𝐞𝐝 𝐏𝐫𝐞𝐦 : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
┃𝐋𝐢𝐦𝐢𝐭 : ${isOwner?`Unlimited Owner`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
┃𝐁𝐚𝐥𝐚𝐧𝐜𝐞 : ${getBalance(sender, balance)}
┗━━━━━━━━━━━━⬣


┏━━⬣ *𝐎𝐖𝐍𝐄𝐑-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}bc [text]
┃${simbolnya} ${prefix}bcimage [reply foto]
┃${simbolnya} ${prefix}ban @tag
┃${simbolnya} ${prefix}unban @tag
┃${simbolnya} ${prefix}block @tag
┃${simbolnya} ${prefix}unblock @tag
┃${simbolnya} ${prefix}setbiobot [text]
┃${simbolnya} ${prefix}setnamabot [text]
┃${simbolnya} ${prefix}resetlimit
┃${simbolnya} ${prefix}prem add @tag waktu
┃${simbolnya} ${prefix}prem del
┃${simbolnya} ${prefix}sewa add waktu
┃${simbolnya} ${prefix}sewa del
┃${simbolnya} ${prefix}setcmd [reply stiker]
┃${simbolnya} ${prefix}delcmd [reply stiker]
┃${simbolnya} ${prefix}listcmd
┃${simbolnya} ${prefix}auto [ketik/vn]
┃${simbolnya}  > [eval]
┃${simbolnya}  => [async]
┃${simbolnya}  $ [cmd termux]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}play [query]
┃${simbolnya} ${prefix}ytmp3 [url]
┃${simbolnya} ${prefix}ytmp4 [url]
┃${simbolnya} ${prefix}video [query]
┃${simbolnya} ${prefix}igdl [url]
┃${simbolnya} ${prefix}igstory [username]
┃${simbolnya} ${prefix}igphoto [url]
┃${simbolnya} ${prefix}igreel [url]
┃${simbolnya} ${prefix}igvideo [url]
┃${simbolnya} ${prefix}igtv [url]
┃${simbolnya} ${prefix}tiktok [url]
┃${simbolnya} ${prefix}tiktokaudio [url]
┃${simbolnya} ${prefix}tiktoknowm [url]
┃${simbolnya} ${prefix}mediafire [url]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐂𝐎𝐍𝐕𝐄𝐑𝐓-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}sticker [tag foto/vid]
┃${simbolnya} ${prefix}swm [text|text2]
┃${simbolnya} ${prefix}take [text|text2]
┃${simbolnya} ${prefix}attp [text]
┃${simbolnya} ${prefix}semoji 🐦
┃${simbolnya} ${prefix}toimg [reply stiker]
┃${simbolnya} ${prefix}tourl [reply foto/vid]
┃${simbolnya} ${prefix}tomp4 [reply stiker gif]
┃${simbolnya} ${prefix}togif [reply stiker gif]
┃${simbolnya} ${prefix}tomp3 [reply vid]
┃${simbolnya} ${prefix}tovn [reply music]
┃${simbolnya} ${prefix}tinyurl [link]
┃${simbolnya} ${prefix}kontak 62***|nama
┃${simbolnya} ${prefix}bass  [reply music]
┃${simbolnya} ${prefix}slow  [reply music]
┃${simbolnya} ${prefix}fast [reply music]
┃${simbolnya} ${prefix}robot [reply music]
┃${simbolnya} ${prefix}detikvn [durasi]
┃${simbolnya} ${prefix}tupai [reply music]
┃${simbolnya} ${prefix}vibrato [reply music]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐄𝐃𝐈𝐓𝐎𝐑-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}memegen teks atas | teks bawah
┃${simbolnya} ${prefix}stickmeme teks
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐒𝐄𝐀𝐑𝐂𝐇-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}pinterest [query]
┃${simbolnya} ${prefix}wikipedia [query]
┃${simbolnya} ${prefix}playstore [query]
┃${simbolnya} ${prefix}yts [query]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐒𝐓𝐎𝐑𝐀𝐆𝐄-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}addrespon [pesan|respon]
┃${simbolnya} ${prefix}delrespon [pesan]
┃${simbolnya} ${prefix}listrespon
┃${simbolnya} ${prefix}listbadword
┃${simbolnya} ${prefix}addbadword [text]
┃${simbolnya} ${prefix}delbadword [text]
┃${simbolnya} ${prefix}addvn [text]
┃${simbolnya} ${prefix}listvn
┃${simbolnya} ${prefix}delvn [text]
┃${simbolnya} ${prefix}addimage [text]
┃${simbolnya} ${prefix}listimage
┃${simbolnya} ${prefix}delimage [text]
┃${simbolnya} ${prefix}addvideo [text]
┃${simbolnya} ${prefix}listvideo 
┃${simbolnya} ${prefix}delvideo [text]
┃${simbolnya} ${prefix}addsticker [text]
┃${simbolnya} ${prefix}liststicker
┃${simbolnya} ${prefix}delstik [text]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐅𝐔𝐍-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}slot
┃${simbolnya} ${prefix}truth
┃${simbolnya} ${prefix}dare
┃${simbolnya} ${prefix}voting @tag | alasan | waktu
┃${simbolnya} ${prefix}delvote
┃	vote
┃	devote
┗━━━━━━━━━━━━⬣
   
┏━━⬣  *𝐆𝐑𝐔𝐏-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}sider [reply pesan bot]
┃${simbolnya} ${prefix}afk [reason]
┃${simbolnya} ${prefix}hidetag [text]
┃${simbolnya} ${prefix}notif [text]
┃${simbolnya} ${prefix}jadian
┃${simbolnya} ${prefix}listonline
┃${simbolnya} ${prefix}tagall
┃${simbolnya} ${prefix}ceksewa
┃${simbolnya} ${prefix}add 628XX
┃${simbolnya} ${prefix}kick @tag
┃${simbolnya} ${prefix}promote @tag
┃${simbolnya} ${prefix}demote @tag
┃${simbolnya} ${prefix}resetlink
┃${simbolnya} ${prefix}linkgc
┃${simbolnya} ${prefix}setdesc [text]
┃${simbolnya} ${prefix}setnamagrup [text]
┃${simbolnya} ${prefix}grup [open/close]
┃${simbolnya} ${prefix}antibadword [on/off]
┃${simbolnya} ${prefix}welcome [on/off]
┃${simbolnya} ${prefix}antilink [on/off]
┃${simbolnya} ${prefix}antitroli [on/off]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐀𝐍𝐈𝐌𝐄-𝐌𝐄𝐍𝐔* 
┃${simbolnya} ${prefix}loli
┃${simbolnya} ${prefix}neko
┃${simbolnya} ${prefix}waifu
┃${simbolnya} ${prefix}shinobu
┃${simbolnya} ${prefix}megumin
┃${simbolnya} ${prefix}bully
┃${simbolnya} ${prefix}cuddle
┃${simbolnya} ${prefix}cry
┃${simbolnya} ${prefix}hug
┃${simbolnya} ${prefix}awoo
┃${simbolnya} ${prefix}kiss
┃${simbolnya} ${prefix}lick
┃${simbolnya} ${prefix}pat
┃${simbolnya} ${prefix}smug
┃${simbolnya} ${prefix}bonk
┃${simbolnya} ${prefix}yeet
┃${simbolnya} ${prefix}blush
┃${simbolnya} ${prefix}smile
┃${simbolnya} ${prefix}wave
┃${simbolnya} ${prefix}highfive
┃${simbolnya} ${prefix}handhold
┃${simbolnya} ${prefix}nom
┃${simbolnya} ${prefix}bite
┃${simbolnya} ${prefix}glomp
┃${simbolnya} ${prefix}slap
┃${simbolnya} ${prefix}kill
┃${simbolnya} ${prefix}happy
┃${simbolnya} ${prefix}wink
┃${simbolnya} ${prefix}poke
┃${simbolnya} ${prefix}dance
┃${simbolnya} ${prefix}cringe
┗━━━━━━━━━━━━⬣
   
┏━━⬣  *𝐋𝐈𝐌𝐈𝐓-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}topbalance
┃${simbolnya} ${prefix}toplimit
┃${simbolnya} ${prefix}limit
┃${simbolnya} ${prefix}level
┃${simbolnya} ${prefix}balance
┃${simbolnya} ${prefix}buylimit [nominal]
┃${simbolnya} ${prefix}giftlimit @tag | nominal
┃${simbolnya} ${prefix}buyprem [need 1k limit]
┗━━━━━━━━━━━━⬣
   
┏━━⬣  *𝐌𝐀𝐑𝐊𝐄𝐑-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}nuliskanan [text]
┃${simbolnya} ${prefix}nuliskiri [text]
┃${simbolnya} ${prefix}foliokanan [text]
┃${simbolnya} ${prefix}foliokiri [text]
┃${simbolnya} ${prefix}naruto [text]
┃${simbolnya} ${prefix}shadow [text]
┃${simbolnya} ${prefix}lovemsg [text]
┃${simbolnya} ${prefix}doubleheart [text]
┃${simbolnya} ${prefix}coffecup [text]
┃${simbolnya} ${prefix}lovetext [text]
┃${simbolnya} ${prefix}butterfly [text]
┃${simbolnya} ${prefix}romantic [text]
┃${simbolnya} ${prefix}smoke [text]
┃${simbolnya} ${prefix}burnpaper [text]
┃${simbolnya} ${prefix}grass [text]
┗━━━━━━━━━━━━⬣

┏━━⬣  *𝐎𝐓𝐇𝐄𝐑𝐒-𝐌𝐄𝐍𝐔*
┃${simbolnya} ${prefix}pantun
┃${simbolnya} ${prefix}faktaunik
┃${simbolnya} ${prefix}donasi
┃${simbolnya} ${prefix}asupan
┃${simbolnya} ${prefix}nulis
┃${simbolnya} ${prefix}getnumber [reply user]
┃${simbolnya} ${prefix}getpic @tag
┃${simbolnya} ${prefix}wame 
┃${simbolnya} ${prefix}towame
┗━━━━━━━━━━━━⬣`
}
