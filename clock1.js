setInterval( () =>
{
d = new Date;
var weekday = d.toLocaleString("default", { weekday: "short" })
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
let time = d.toLocaleString("default", { weekday: "long" }) ;
document.getElementById("day").innerHTML = time  +', '+ d.getDate() + '/' +d.getMonth() + '/' + d.getFullYear();;
document.getElementById("date").innerHTML =d.getHours()+ ':' + d.getMinutes()+ ':' +d.getSeconds();
},1000
);


 // +' On '+ d.getDate() + '/' +d.getMonth() + '/' + d.getFullYear(); 
