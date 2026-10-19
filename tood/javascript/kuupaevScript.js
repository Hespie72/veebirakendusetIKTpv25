const now=new Date();

const paev=now.getDate()
console.log("Täname päev "+paev+" päev");

const kuu=now.getMonth()+1;
console.log("Kuu number on:"+kuu);

const aasta=now.getFullYear()
console.log("Aasta on "+aasta);

const nadalalpaev=now.getDay();
console.log("Nadalapäev on "+nadalalpaev);

const tund=now.getHours();
console.log("Tund on "+tund);

const minutid=now.getMinutes();
console.log("Minutid on "+minutid);

const konsultatsioon=new Date(2026, 10, 2);
const vahe=konsultatsioon.getTime()-now.getTime();
const kuupaev=vahe/(1000*60*60*24);

console.log("Konsultatsiooni nädala "+kuupaev.toFixed()+" päeva");

const sunnipaev=new Date(2027, 3, 29);
const vahe1=sunnipaev.getTime()-now.getTime();
const kuupaev1=vahe1/(1000*60*60*24);

console.log("Sünnipäeva "+kuupaev1.toFixed()+" päeva");

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML="Täna on "+paev+", "+kuu+", "+aasta+". Praegu on "+tund+":"+minutid;
}
function sunni(){
    let vastus1=document.getElementById("vastus1");
    vastus1.innerHTML="Sünnipäeva "+kuupaev1.toFixed();

}
function konsul(){
    let vastus2=document.getElementById("vastus2");
    vastus2.innerHTML="Konsultatsiooni nädala "+kuupaev.toFixed()+" päeva";

}