function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}
//radio valikud
function radioValikud(){
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let soundcloud = document.getElementById("soundcloud");
    let youtube  = document.getElementById("youtube");
    let raadio  = document.getElementById("raadio");

    let valik=""
    if(spotify.checked){
        valik=spotify.value;
    }else if(soundcloud.checked){
        valik=soundcloud.value;
    } else if(youtube.checked){
        valik=youtube.value;
    } else if(raadio.checked){
        valik=raadio.value;
    } else{
        valik="palun tee oma valik";
    }
//vastus
    vastus2.innerHTML="Valik: "+valik;
    vastus2.style.backgroundColor="lightgreen";

    return valik;
}
//checkbox
function checkBoxValik(){
    let vastus3 = document.getElementById("vastus3");
    let radiohead = document.getElementById("radiohead");
    let thesmashingpumpkins = document.getElementById("the-smashing-pumpkins");
    let thesmiths = document.getElementById("the-smiths");
    let haveanicelife = document.getElementById("have-a-nice-life");
    let slowdive = document.getElementById("slowdive");
    let muse = document.getElementById("muse");

    let valik2="";
    if(radiohead.checked){
        valik2+=radiohead.value +', <br>';
    }
    if(thesmashingpumpkins.checked){
        valik2+=thesmashingpumpkins.value +', <br>';
    }
    if(thesmiths.checked){
        valik2+=thesmiths.value +', <br>';
    }
    if(haveanicelife.checked){
        valik2+=haveanicelife.value +', <br>';
    }
    if(slowdive.checked){
        valik2+=slowdive.value +', <br>';
    }
    if(muse.checked){
        valik2+=muse.value +', <br>';
    }
    if(valik2==""){
        valik2="Tee oma valik"
    }
    vastus3.innerHTML="Sinu lemmikud on: "+valik2;
    vastus3.style.backgroundColor="lightgreen";

    return valik2;
}

function rangeValik(){
    let vastus4 = document.getElementById("vastus4");
    let tund=document.getElementById("tund");

    vastus4.innerHTML="sa kuulad muusikat: "+tund.value+"tundi";

    return tund.value;
}
function selectValik(){
    let vastus5 = document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");

    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Sa valisid "+stiil.value;
    } else {
        vastus5.innerHTML="Palun tee oma valik";
    }
    return stiil.value;
}
function arvamusLugemine(){
    let vastus6 = document.getElementById("vastus6");
    let arvamus=document.getElementById("arvamus");

    vastus6.innerHTML="Teie arvamus on: " +arvamus.value;
    vastus6.style.backgroundColor="lightgreen";

    return arvamus.value;
}
function radiovalik1(){
    let vastus7 = document.getElementById("vastus7");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    let valik1="";
    if(jah.checked){
        valik1+=jah.value;
    } else if(ei.checked){
        valik1+=ei.value;
    } else{
        valik1="palun tee oma valik";
    }
    vastus7.innerHTML="Valik: "+valik1;
    vastus7.style.backgroundColor="lightgreen";
    return valik1;

}

function raadiojaama(){
    let vastus8 = document.getElementById("vastus8");
    let raadiojaam=document.getElementById("raadiojaam");

    vastus8.innerHTML="Raadiojaam: "+raadiojaam.value;
    vastus8.style.backgroundColor="lightgreen";

    return raadiojaam.value;
}

//kasuta teisi funktsioone
function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValikud();
    let valik2=checkBoxValik();
    let tund=rangeValik();
    let stiil=selectValik();
    let arvamus=arvamusLugemine();
    let valik1=radiovalik1();
    let raadiojaam=raadiojaama();

    vastusKoik.innerHTML="Sinu nimi on: "+nimi+',<br>'+
        'Sinu lemmikud on: ' + valik2 + '<br>'+
        'Sa kasutad: '+valik+',<br>'+'Sa kuuled: '+tund+' tundi,<br>'+
        'Sa valisid: '+stiil+',<br>'+'Teie arvamus on: '+arvamus+',<br>'+
        'Kas sa kuulad raadiot? '+valik1+',<br>'+
        'raadiojaam: '+raadiojaam+'<br>';
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";
}