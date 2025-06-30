
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];

document.getElementById("demo").innerHTML = day + " " + month + " " + d.getDate() + ", "  + d.getFullYear()