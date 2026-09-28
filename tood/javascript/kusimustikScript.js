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

//kasuta teisi funktsioone
function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValikud();
    let valik2=checkBoxValik();
    let tund=rangeValik();
    let stiil=selectValik();

    vastusKoik.innerHTML="Sinu nimi on: "+nimi+'<br>'+
        'Sinu lemmikud on: ' + valik2 + '<br>'+
        'Sa kasutad '+valik+'<br>'+'Sa kuuled '+tund+'tundi<br>'+
        'Sa valisid'+stiil;
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";
}