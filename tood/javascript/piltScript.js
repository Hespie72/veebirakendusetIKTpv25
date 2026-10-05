// juhuslik pilt - mida võrtakse massiivist
function juhuslikPilt() {
    //massiiv pildifailidest
    pildid=[
        '../pilti/smile.png',
        '../pilti/neutral.png',
        '../pilti/kurb.png',
        '../pilti/lill.png'
    ]
    const randomPilt=document.getElementById("randomPilt");
    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    //Math.floor - ümardab töisarvuni
    //Math.random - juhuslik arv
    randomPilt.src=pilt;
}
function selectValik() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementById('valik');
    let randomPilt = document.getElementById('randomPilt');

    if (randomPilt.getAttribute("src") == valik.value) {
        vastus.innerHTML = "Õige!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "Vale!";
        vastus.style.color = "red";
    }
}
function radioValik() {
    let piltValik = document.getElementsByName('piltValik');
    let valitudPilt = document.getElementById('valitudPilt');

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            return;
        }
    }

    alert("Tee oma valik!");
}