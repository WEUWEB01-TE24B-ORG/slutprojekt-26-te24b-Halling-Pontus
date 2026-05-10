function GetTime() { //gör så man kan se hur många minuter det är tills linjen öpnnan eller när den stänger eller bara att den är öppen
    now = new Date();
    let hour = now.getHours()
    let min = now.getMinutes()
    switch (true) {
        case (hour === 17):
            document.querySelector('p.time').textContent = `Stängt, öppnar snart (${60 - min} minuter)`;
            break;
        case (hour === 0):
            document.querySelector('p.time').textContent = `Öppet, Stänger snart (${60 - min} minuter)`;
            break;
        case (hour > 17 || hour < 2):
            document.querySelector('p.time').textContent = `Öppet`;
            break
        default:
            document.querySelector('p.time').textContent = `Stängt, öpnnar om ${18 - hour} timmar och ${60 - min} minuter`;
    }
}
document.addEventListener('DOMContentLoaded', () => { //gör så tiden också updateras när sidan laddas
    GetTime(); 
});
let videoIsOn = false
function showVideo(){ //gör så man kan srtänga av och sätta på videon
    videoIsOn = !videoIsOn;
    if(videoIsOn){document.querySelector("iframe").style.display = "block";  }
    else if (!videoIsOn){document.querySelector("iframe").style.display = "none";  }
}
setInterval(GetTime, 5000)