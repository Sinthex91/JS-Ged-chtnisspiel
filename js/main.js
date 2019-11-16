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
