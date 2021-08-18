setInterval( () =>
{
d = new Date;
var weekday = d.toLocaleString("default", { weekday: "short" })
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
hrotation = 30*htime+(mtime)/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`; 
minute.style.transform = `rotate(${mrotation}deg)`; 
second.style.transform = `rotate(${srotation}deg)`; 
let time = d.toLocaleString("default", { weekday: "short" }) ;
document.getElementById("day").innerHTML = time;
document.getElementById("date").innerHTML = d.getDate();

if(stime==0 && mtime==17)
{
}

},1000
);
// + ' ' + d.getDate()