const autoReply = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "🤓Hey, I am 🍁 nice 🍁 J A  N  I D  U ☀👽"
    }
    if(msg.match(/😒/gi)){
        R = "😒මොකෝ"
    }
    if(msg.match(/🥲/gi)){
        R = "🥲💔"
    }
    if(msg.match(/ane|අනේ|අනෙ/gi)){
        R = "🤭අනේ පනේ🤫😂"
    }
    if(msg.match(/Ponnayo|Pako|Hutho/gi)){
        R = "😡හරි බන් එල උබට කුනුහරප පුලුවන් බන් එල අප්පොඩියක් ගහන්න වටිනවා 😂"
    }
    if(msg.match(/Hukapan|Fuck|Sex|xxx/gi)){
        R = "🤭අනේ පොඩි එකෝ උබට බිජක්වත් තියෙද කියපන්කො😂"
    }
    if(msg.match(/yako|yaku|යකෝ|යකො/gi)){
        R = "😒කවුද යකා. මමද?💔"
    }
    if(msg.match(/Pit/gi)){
        R = "🤭බලාගෙන කලිසම පැච්චෙකක් හැදේවී ලූස් එකක් ගන්නි ඉක්මනින්😂"
    }
    if(msg.match(/Kanava thova/gi)){
        R = "🤭අනේ පකෝ මන් කන්නෙ උබව බැදලා😂"
    }
    if(msg.match(/Heta enava dha/gi)){
        R = "🤭මොකෝ මන් ආවේ නෑ කියයා උබ එන්නෙ නැතුව ඉන්නව ද?😂"
    }
    if(msg.match(/na|නැ|නෑ/gi)){
        R = "හේහේ🥲 නැද්ද?"
    }
    if(msg.match(/ඔව්|ow /gi)){
        R = "😌ඔව් නං කමක් නෑ"
    }
    if(msg.match(/ගියා|giya|echcharay|එච්චරයි/gi)){
        R = "😌එච්චරයි..."
    }
    if(msg.match(/අඩෝ|ado/gi)){
        R = "😏ඇයි මොකෝ?"
    }
    if(msg.match(/😁/gi)){
        R = "sendSticker:hii"
    }
    if(msg.match(/බල්ලො|ballo|bllo|බම්ලො/gi)){
        R = "🐶මොකෝ බල්ලො"
    }
    if(msg.match(/කව්ද|කවුද|kawd|who|kwd/gi)){
        R = "😎මම තමයි රතු මකරා💀"
    }
    if(msg.match(/බය|baya/gi)){
        R = "😂හා"
    }
    if(msg.match(/mn|මං|ඕයි|oi/gi)){
        R = "😝අවදානෙද ඉල්ලන්නේ"
    }
    if(msg.match(/gm|morning/gi)){
        R = `🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃`
    }
    if(msg.match(/😂/gi)){
        R = `හිනා වෙන්න දෙයක් කිව්වේ නෑ😒 මේක තමයි සංසාරේ ණය ගනුදෙනුව👀`
    }
    if(msg.match(/gn|night|නයිට්/gi)){
        R = "🌚ලබන්නා වූ රාත්‍රිය, හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇඳ යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා👻👻"
    }if(msg.match(/nikan|නිකං|නිකම්/gi)){
        R = "🤫නිකං ඉන්නෙපා ඇඳුමක් ඇඳගන්න."
    }
    if(msg.match(/lamayo|ළමයෝ|ලමයෝ/gi)){
        R = "☺️❤️"
    }
    if(msg.match(/දෙන්න|දාන්න|dahn|dapan|dapn|දාපං|දීපං|දීපන්|dipn|dipan|dahn/gi)){
        R = "😏බෑ..."
    }
    if(msg.match(/plala|ply|පල|පලෑ/gi)){
        R = "😏එහෙමතේ"
    }
    if(msg.match(/කාලද|kalad/gi)){
        R = "🥲නෑහ්"
    }
    if(msg.match(/telegram|ටෙලි/gi)){
        R = "Telegram Group එකට එන්න😌\nt.me/+94713331515"
    }
    if(msg.match(/whatsapp|වට්සැප්|phon|‌පෝන්/gi)){
        R = "sendSricker:phonehate"
    }
    if(msg.match(/hehe|he he|හේහේ/gi)){
        R = "sendSticker:hehe"
    }
    if(msg.match(/❤️/gi)){
        R = "sendSticker:heart"
    }
    if(msg.match(/😒|hm|හ්ම්|හුම්/gi)){
        R = "sendSticker:hmm"
    }
    if(msg.match(/amo|ammo|අමෝ/gi)){
        R = "sendSticker:amo"
    }
    if(msg.match(/🤣/gi)){
        R = "sendSticker:smile"
    }
    if(msg.match(/mk/gi)){
        R = "🥲මුකුත් නෑහ්"
    }
    if(msg.match(/🙂/gi)){
        R = "🙂හ්ම්💔"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "sendAudio:110"
    }
    if(msg.match(/😌/gi)){
        R = "sendAudio:111"
    }
    if(msg.match(/🤣|😂😂/gi)){
        R = "sendAudio:112"
    }
    if(msg.match(/ඇයි|මොකෝ/gi)){
        R = "sendAudio:117"
    }
    if(msg.match(/😒/gi)){
        R = "sendAudio:113"
    }
    if(msg.match(/balla|bll|pko/gi)){
        R = "sendAudio:114"
    }
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    if(msg.match(/palayan|plyn|පල/gi)){
        R = "sendAudio:116"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
