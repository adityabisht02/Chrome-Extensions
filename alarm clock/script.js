let clockTime=document.querySelector(".clock-time");
let eventname=document.querySelector("#event-name");
let setreminder=document.querySelector(".set-reminder");
let alarmhour=document.querySelector("#hours");
let alarmmin=document.querySelector("#minutes");
let alarmsecond=document.querySelector("#seconds");
let ul=document.querySelector("ul");
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');


let alarms=[];

function gettime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    let now=hours+":"+minutes+":"+seconds;
    clockTime.textContent=now;
    if(alarms.includes(now)){
        console.log("its TIME")
        audio.play();
    }
}
setInterval(gettime,1000);

setreminder.addEventListener("click",function(event){         //adding alarm
    event.preventDefault();

    let hours=alarmhour.value;
    let minutes=alarmmin.value;
    let seconds=alarmsecond.value;

    let time=hours+":"+minutes+":"+seconds;

    let ulitem=document.createElement("div");
    ulitem.classList.add("ul-item");
    let newitem=document.createElement("li");
    newitem.textContent=eventname.value+" at "+time;
    let btn=document.createElement("button");
    btn.classList.add("remove-alarm");
    btn.textContent="Remove Alarm";
  
    ulitem.appendChild(newitem);
    ulitem.appendChild(btn);
    ul.appendChild(ulitem);

    btn.addEventListener("click",function(event){
        ul.removeChild(ulitem);
        var index = alarms.indexOf(time);
alarms.splice(index, 1);
    })

 
    alarms.push(time);
    console.log(alarms)
});

