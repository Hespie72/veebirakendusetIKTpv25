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

let algneKirjeldus = raamat.kirjeldus();
console.log("1. Raamatu kirjeldus: " + algneKirjeldus);

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

// Kuvame tulemused HTML-lehel
let html = "<h2>1. Raamatu kirjeldus</h2>";
html += "<p>" + algneKirjeldus + "</p>";

html += "<h2>2. Muudetud raamat</h2>";
html += "<p>" + raamat.kirjeldus() + "</p>";

html += "<h2>3. Kõik raamatud</h2>";

raamatukogu.raamatud.forEach((raamat, indeks) => {
    html += "<p>" + (indeks + 1) + ". " + raamat.pealkiri + " – " + raamat.autor + " (" + raamat.aasta + ")</p>";
});

html += "<h2>4. Raamatute koguarv</h2>";
html += "<p>" + raamatukogu.koguArv() + "</p>";

html += "<h2>5. Pärast 2000. aastat ilmunud raamatuid</h2>";
html += "<p>" + raamatukogu.arvutaUuedRaamatud() + "</p>";

let vanem = raamatukogu.leiaVanemRaamat();

html += "<h2>6. Kõige vanem raamat</h2>";
html += "<p>" + vanem.pealkiri + " – " +
    vanem.autor + " (" + vanem.aasta + ")</p>";

let selgitus = "Meetod leiaVanemRaamat() leiab raamatukogust " +
    "kõige varasema ilmumisaastaga raamatu.";

html += "<h2>Oma meetodi selgitus</h2>";
html += "<p>" + selgitus + "</p>";

console.log(selgitus);

document.getElementById("tulemused").innerHTML = html;