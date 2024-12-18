let Hrs = document.getElementById("Hrs");
let Mins = document.getElementById("Mins");
let Secs = document.getElementById("Secs");

setInterval(()=>{
let currentTime = new Date();

Hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
Mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
Secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)