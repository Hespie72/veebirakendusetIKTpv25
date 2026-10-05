function valiCheckbox() {
    let vastus1 = document.getElementById("vastus1");
    let JS = document.getElementById("JS");
    let Python = document.getElementById("Python");
    let csharp = document.getElementById("csharp");
    let PHP = document.getElementById("PHP");
    let valik="";
    if(JS.checked){
        valik+=JS.value +', <br>';
    }
    if(Python.checked){
        valik+=Python.value +', <br>';
    }
    if(csharp.checked){
        valik+=csharp.value +', <br>';
    }
    if(PHP.checked){
        valik+=PHP.value +', <br>';
    }
    if(valik==""){
        valik="Tee oma valik"
    }
    vastus1.innerHTML="Sinu valitud programmeerimiskeeled: "+valik;
    vastus1.style.backgroundColor="lightgreen";

    return valik;
}
function textareaAndme() {
    let vastus2 = document.getElementById("vastus2");
    let arvad = document.getElementById("arvad");

    vastus2.innerHTML="Sinu arvamus: " +arvad.value;
    vastus2.style.backgroundColor="lightgreen";

    return arvad.value;
}
function rangeValik() {
    let vastus3 = document.getElementById("vastus3");
    let tund=document.getElementById("tund");

    vastus3.innerHTML="Tegeled programmeerimisega "+tund.value+" tundi nädalas.";

    return tund.value;
}
function radioValik1() {
    let vastus4 = document.getElementById("vastus4");
    let radiovalik = document.getElementsByName("radiovalik");
    let valitudPilt=document.getElementById("valitudPilt");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    if(jah.checked){
        vastus4.innerHTML="Jah, mulle meeldib programmeerida!";
        valitudPilt.src="pilti/smile.png";
    }else if(ei.checked){
        vastus4.innerHTML="Ei, mulle ei meeldi programmeerida!";
        valitudPilt.src="pilti/kurb.png";
    }
 }
 function tooristText() {
     let vastus5 = document.getElementById("vastus5");
     let toorist=document.getElementById("toorist");

     vastus5.innerHTML="Sinu nimetatud tööriistad: "+toorist.value;
     vastus5.style.backgroundColor="lightgreen";

     return toorist.value;
 }
function valiCheckbox1() {
    let vastus1 = document.getElementById("vastus6");
    let JS = document.getElementById("J");
    let Python = document.getElementById("Python1");
    let csharp = document.getElementById("csharp1");
    let PHP = document.getElementById("PHP1");
    let Cpp = document.getElementById("Cpp");
    let HTML = document.getElementById("HTML");
    let valik1="";
    if(J.checked){
        valik1+=J.value +', <br>';
    }
    if(Python1.checked){
        valik1+=Python1.value +', <br>';
    }
    if(csharp1.checked){
        valik1+=csharp1.value +', <br>';
    }
    if(PHP1.checked){
        valik1+=PHP1.value +', <br>';
    }
    if(Cpp.checked){
        valik1+=Cpp.value +', <br>';
    }
    if(HTML.checked){
        valik1+=HTML.value +', <br>';
    }
    if(valik1==""){
        valik1="Tee oma valik"
    }
    vastus6.innerHTML="Sinu valik: "+valik1;
    vastus6.style.backgroundColor="lightgreen";

    return valik1;
}
function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");
    let check = valiCheckbox();
    let texta = textareaAndme();
    let tund = rangeValik();
    let radio = radioValik1();
    let text = tooristText();
    let vali = valiCheckbox1();

    vastusKoik.innerHTML = "Sinu programmeerimine keelt kui sa tead on: " + check + '<br>' +
        'Sinu arvamus on: ' + texta + '<br>' +
        'Sa programmerimine: ' + tund + ' tundi,<br>' + radio + ',<br>' +
        'Siun nimetud tööristu on: ' + text + ',<br>' + 'Sa tahad õppida on: ' + vali + '<br>'
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    valitudPilt.src="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastusKoik.innerHTML="";
}