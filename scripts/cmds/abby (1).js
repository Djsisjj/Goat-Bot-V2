module.exports = {
  config: {
    name: "bby",
    version: "1.0",
    author: "dipto",
    role: 0,
    description: {
      en: "no prefix ."
    },
    category: "System",
    guide: {
      en: "just type bby"
    }
  },

  onStart: async function () { },
onChat: async function ({ api, event, message}) {
const dipto = event.body.toLowerCase()
if(dipto.startsWith("bby")){
    const tl = ["𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺","𝗕𝗯𝘆 না জানু,বল 😌","বেশি bby Bbby করলে leave নিবো কিন্তু😒😒","__বেশি বেবি বললে কামুর দিমু,,//🤭🤭","𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂","𝗕𝗯𝘆 𝗻𝗮 𝗯𝗼𝗹𝗲 𝗕𝗼𝘄 𝗯𝗼𝗹𝗼😘","এই এই তোর পরীক্ষা কবে ? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 𝗸𝗼𝗿𝗶𝘀😾","গরু উড়ে আকাশে সালামি পাঠান বিকাশে💸💰","আমার সোনার বাংলা ,তারপরে লাইন কি ?🙈","🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না🥲","হটাৎ আমাকে মনে পড়লো,,🙄","𝗛𝗲𝘆 𝗛𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝗯𝗼𝗹𝗼😁😁","আরে Bolo আমার জান ,কেমন আসো?😚","একতা 𝑩𝑭 খুঁজে দাও😿","ফ্রেন্ড রিকোয়েস্ট দিলে ৫ টাকা দিবো 😗","৩২ তারিখ আমার বিয়ে🐤","আগে একটা গান বলো,☹নাহলে কথা বলবো না_🥺","বলো কি করতে পারি তোমার জন্য😚","°কথা দেও আমাকে পটাবা...!!😌","বার বার Disturb করেছিস কোনো😾,আমার জানু এর সাথে ব্যাস্ত আসি😋","আমাকে না দেকে একটু পড়তেও বসতে তো পারো🥺🥺 ","বার বার ডাকলে মাথা গরম হয় কিন্তু😑😒 ","𝗕𝗯𝘆 𝗕𝗯𝘆 না করে আমার বস মানে,,BADBOY ,BADBOY ও তো করতে পারো😑😒","বলো জানু 🌚 ","কি হলো ,মিস টিস করচ্ছিস নাকি🤣","Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈","আজকে আমার mন ভালো নেই🙉" ];
    const rand = tl[Math.floor(Math.random() * tl.length)];
message.reply(rand)
const response = await axios.get(`https://nobs-api.onrender.com/dipto/baby?text=${reply}'
}
}
}
