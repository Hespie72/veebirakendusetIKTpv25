let raamat = {
    pealkiri: "Harry Potter",
    autor: "J. K. Rowling",
    aasta: 1997,

    kirjeldus() {
        return this.pealkiri + ", autor: " +
            this.autor + ", aasta: " + this.aasta;
    },
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
    }
};

console.log("1. Raamatu kirjeldus: "+ raamat.kirjeldus());

raamat.muudaAastat(2001);
console.log("2. Muudetud raamat: "+raamat.kirjeldus());

let raamatukogu = {
    raamatud: [
        raamat,
        {
            pealkiri: "The Hobbit",
            autor: "J. R. R. Tolkien",
            aasta: 1937
        },
        {
            pealkiri: "The Hunger Games",
            autor: "Suzanne Collins",
            aasta: 2008
        }
    ],

    kuvaRaamatud() {
        console.log("3. Kõik raamatud:");

        this.raamatud.forEach((raamat, indeks) => {
            console.log(
                (indeks + 1) + ". " + raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")"
            );
        });
    },

    lisaRaamat(uusRaamat) {
        this.raamatud.push(uusRaamat);
    },

    koguArv() {
        return this.raamatud.length;
    },

    arvutaUuedRaamatud() {
        return this.raamatud.filter(
            raamat => raamat.aasta > 2000
        ).length;
    },

    leiaVanemRaamat() {
        return this.raamatud.reduce((vanem, raamat) =>
            raamat.aasta < vanem.aasta ? raamat : vanem
        );
    }
};

// Lisame uue raamatu
raamatukogu.lisaRaamat({
    pealkiri: "1984",
    autor: "George Orwell",
    aasta: 1949
});

raamatukogu.kuvaRaamatud();

console.log("4. Raamatute koguarv:");
console.log(raamatukogu.koguArv());

console.log("5. Pärast 2000. aastat ilmunud raamatuid:");
console.log(raamatukogu.arvutaUuedRaamatud());

console.log("6. Kõige vanem raamat:");
console.log(raamatukogu.leiaVanemRaamat());

// 3. Kuvame tulemused HTML-lehel
const tulemused = document.getElementById("tulemused");

function lisaPealkiri(tekst) {
    const pealkiri = document.createElement("h2");
    pealkiri.textContent = tekst;
    tulemused.appendChild(pealkiri);
}

function lisaTekst(tekst) {
    const element = document.createElement("p");
    element.textContent = tekst;
    tulemused.appendChild(element);
}

lisaPealkiri("Raamatu kirjeldus");
lisaTekst(raamat.kirjeldus());

lisaPealkiri("Kõik raamatud");

raamatukogu.raamatud.forEach((raamat, indeks) => {
    const kaart = document.createElement("div");
    kaart.className = "raamat";
    kaart.textContent =
        (indeks + 1) + ". " + raamat.pealkiri +
        " – " + raamat.autor +
        ", " + raamat.aasta;

    tulemused.appendChild(kaart);
});

lisaPealkiri("Raamatukogu statistika");
lisaTekst("Raamatute koguarv: " +
    raamatukogu.koguArv());

lisaTekst("Pärast 2000. aastat ilmunud raamatuid: " +
    raamatukogu.arvutaUuedRaamatud());

const vanem = raamatukogu.leiaVanemRaamat();
lisaTekst("Kõige vanem raamat: " +
    vanem.pealkiri + " (" + vanem.aasta + ")");