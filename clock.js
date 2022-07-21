let username=prompt("Adınız nedir?");
let info=document.querySelector("#myName");
info.innerHTML=`${username}`

function clockFunction(){
    let dateTime=new Date();
    let day=dateTime.getDay();
    let hrs=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();


    document.querySelector("#hours").innerHTML=hrs;
    document.querySelector("#minute").innerHTML=min;
    document.querySelector("#seconds").innerHTML=sec;
    document.querySelector("#day").innerHTML=day;
}

setInterval(clockFunction,10);

