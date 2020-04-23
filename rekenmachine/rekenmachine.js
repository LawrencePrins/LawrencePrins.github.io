/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//array verander achtergrond kleur
var kleur = ["#e0c99b", "#c1e09b", "#9be0cf", "#ac9be0", "#da9be0", "#e09ba2", "#e09b9b"];
// zorgt voor random kleuren iedere klik
var random = kleur[Math.floor(Math.random() * kleur.length)];

// for loop, bron: https://www.youtube.com/watch?v=s9wW2PpJsmQ Mosh Hamedani
var mijnLijst = ['Rekening', 'Bedrag', 'Service', 'Kwaliteit'];

function berekenFooi() {
    // de waarde van de input/selection velden
    var rekeningBedrag = document.getElementById("rekeningBedrag").value;
    var serviceKwaliteit = document.getElementById("serviceKwaliteit").value;

    //als er niets wordt ingevoerd bron: https://www.w3schools.com/js/js_comparisons.asp W3Schools
    if (rekeningBedrag === "" || serviceKwaliteit === 0) {
        return window.alert("Ontbrekende data, groetjes Lawrence!");
    }

    //de wiskunde
    var total = (rekeningBedrag * serviceKwaliteit); //berekend het fooibedrag
    total = Math.round(total * 100) / 100; //zorgt voor afronding decimalen
    total = total.toFixed(2); //zorgt voor 2 decimalen

    //weergeeft het fooi
    document.getElementById("totaalBedrag").style.display = "block";
    document.getElementById("fooi").innerHTML = "€" + total;
}

// veranderd de body door de var random
function kleurVerandering() {
    document.querySelector("body").style.background = random;
}

// verander achtergrond kleur
document.getElementById("veranderKleur").onclick = kleurVerandering;

// wanneer je op button drukt
document.getElementById("bereken").onclick = berekenFooi;

// verstop fooi bedrag
document.getElementById("totaalBedrag").style.display = "none";

for (var i = 0; i < mijnLijst.length; i++) {
    console.log(mijnLijst[i]);
}