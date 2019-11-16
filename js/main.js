// var zahlEins = parseFloat(prompt("Füge die erste Zahl hinzu", ""));
// var zahlZwei = parseFloat(prompt("Füge die zweite Zahl hinzu", ""));
// var summe = zahlEins + zahlZwei;
// document.write(zahlEins + " + " + zahlZwei + " = " + summe);

// Eigenkreation
// var score = prompt("Wie ist dein Score?", "1 - 100");
// if (score > 90) document.write("Du bist der BABBO!");
// else if (score > 80) document.write("Du bist schon ziemlich gut.");
// else if (score > 50) document.write("Ganz ok.");
// else if (score > 20) document.write("Viel Glück beim nächsten Mal.");
// else document.write("Und tschüss!");

// confirm
// var answer = confirm("Möchtst du fortfahren?");
// if (answer) document.write("Neue Seite, viel Infos");
// else document.write("Auf wieder sehen");

// && ||
// var fortschritt = prompt("der Fortschritt", "");
// if (fortschritt >= 10 && fortschritt < 15)
//   document.write("Du bist im dritten Kapitel.");
// else if (fortschritt < 5 || fortschritt > 20) document.write("ERROR");
// else if (fortschritt >= 15 && fortschritt < 20)
//   document.write("Du bist im vierten Kapitel.");
// else document.write("Du bist im zweiten Kapitel.");

// var eingabe = prompt("Geben Sie eine Zahl zwischen 1 und 99 ein.");
// var rdmNum = Math.random() * 100;
// var zahl = parseFloat(eingabe);

// if (eingabe == null) document.write("Sie haben abgebrochen.");
// else if (isNaN(eingabe)) document.write("Sie haben keine Zahl eingegeben.");
// else if (eingabe == "") document.write("Sie haben nichts eingegeben.");
// else if (zahl >= 100)
//   document.write("Sie haben keine gültige Zahl eingegeben.");
// else if (zahl <= 1) document.write("Sie haben keine gültige TEST eingegeben.");
// else if (Math.abs(rdmNum - zahl) < 10) alert("Sie sind nahe dran!");
// else if (Math.abs(rdmNum - zahl) > 10) alert("Weit daneben.");
// else if (Math.abs(rdmNum - zahl) < 5) alert("Sie sind RICHTIG nahe dran!");
// else if (Math.abs(rdmNum - zahl) < 2) alert("BINGO!");
// else document.write("Fehler");

// //Kontrolle
// alert(
//   "Zufall: " +
//     rdmNum +
//     "\nEingabe: " +
//     eingabe +
//     "\nisNaN(): " +
//     isNaN(eingabe) +
//     "\nZahl: " +
//     zahl +
//     "\nDifferenz: " +
//     (rdmNum - zahl) +
//     "\nBetrag: " +
//     Math.abs(rdmNum - zahl)
// );

// var zufall = Math.random();
// var eingabe = prompt("Geben Sie eine Zahl zw 0 u 1 ein, nicht 1");
// var zahl = parseFloat(eingabe);

// if(eingabe == null)

//typeof
// var a = 1337;
// var b = "1337";
// var c = 1337;
// var d = true;

// document.write("a = " + a + ", type: " + typeof a + "</br>");
// document.write("b = " + b + ", type: " + typeof b + "</br>");
// document.write("c = " + c + ", type: " + typeof c + "</br>");
// document.write("d = " + d + ", type: " + typeof d + "</br>");

// // document.write(typeof a === "number");
// if (typeof b === "number") document.write("b ist eine Zahl.");
// else if (typeof b === "string") document.write("b ist ein String.");
// else document.write("Fehler.");

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// var freund = prompt("Gebe einen Freund ein: ", "");

// freund = capitalizeFirstLetter(freund);

// switch (freund) {
//   case "Tobi":
//     alert("Guter Freund!");
//     break;
//   case "Mathi":
//     alert("Bester Freund!");
//     break;
//   case "Alena":
//     alert("..Freund?");
//     break;
//   default:
//     alert("Noch(...) nicht gelistet.");
// }

//loops & schleifen
// document.write("<p>1: ");
// for (let i = 1; i <= 5; i++) document.write(i + " ");
// document.write("<br>2: ");
// for (let x = 20; x >= 10; x--) document.write(x + " ");
// document.write("<br>3: ");
// for (let x = 3; x <= 4.1; x += 0.2) document.write(x + " ");
// document.write("<br>4: ");
// for (let x = 3; x <= 4.1; x += 0.2) document.write(x.toFixed(1) + " ");
// document.write("<br>5: ");
// for (let k = 10; k <= 50; k++) {
//   if (k >= 16 && k <= 24) continue;
//   if (k > 30) break;
//   document.write(k + " ");
// }
// document.write("</p>");

// TABELLE ERSTELLEN

// for (let z = 1; z <= 5; z++) {
//   document.write("<tr>");
//   for (let s = 1; s <= 10; s++)
//     document.write("<td>Zeile " + z + " / Spalte " + s + "</td>");
//   document.write("</tr>");
// }

//WHILE SCHLEIFE

// var summe = 0;
// while (summe < 4) {
//   summe += Math.random();
//   document.write(summe + "<br>");
// }

//DO WHILE SCHLEIFE RATESPIEL
// var zufall = Math.random() * 100 + 1;
// var zGanz = Math.floor(zufall);
// var eingabe;
// var ausgabe = "";
// var zahl;
// var nr = 0;

// do {
//   nr++;
//   eingabe = prompt(
//     "Geben Sie eine Zahl von bis 100 ein und versuchen Sie ihr Glück!",
//     "1-100"
//   );
//   if (eingabe == null) {
//     ausgabe += "Sie haben abgebrochen";
//     break;
//   }
//   zahl = parseInt(eingabe);
//   let tx;
//   if (zahl < zGanz) tx = nr + ") " + zahl + " ist zu klein";
//   else if (zahl > zGanz) tx = nr + ") " + zahl + " ist zu groß";
//   else tx = nr + ") " + zahl + " ist richtig";

//   ausgabe += tx + "<br>";
//   alert(tx);
// } while (eingabe != zGanz);

// document.write(ausgabe);

//Gedächtnistraining
var text, eingabe;
var laenge = 3;
var zaehler = 0;
var ausgabe = "";

do {
  zaehler++;
  if (zaehler > 3) {
    zaehler = 1;
    laenge++;
  }
  text = "";
  for (let i = 1; i <= laenge; i++) text += Math.floor(Math.random() * 10);
  alert("Ziffernfolge: " + text);

  eingabe = prompt("Ihre Eingabe");
  ausgabe += text + "<br>";
} while (eingabe == text);

//Bewertung
var ergebnis = laenge - 1;
if (ergebnis < 3) ergebnis = 0;
ausgabe += "Sie konnten sich " + ergebnis + " Ziffern merken";
document.write(ausgabe);
