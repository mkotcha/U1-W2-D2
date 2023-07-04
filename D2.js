/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 10,
  b = 15;
console.log(`a = ${a}\nb = ${b}`);

if (a > 10) {
  console.log(`${a} > ${b}`);
} else {
  console.log(`${b} > ${a}`);
}

console.log("****************************************************************");
/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const l = 5,
  m = 10;

if (l !== 5) {
  console.log(`${l} not equal to 5`);
}
if (m !== 5) {
  console.log(`${m} not equal to 5`);
}

console.log("****************************************************************");

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero 
fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const i = 13,
  j = 25;

if (i % 5 === 0) console.log(`${i} è divisibile per 5`);
if (j % 5 === 0) console.log(`${j} è divisibile per 5`);

console.log("****************************************************************");

/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno 
di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const r = 3;
s = 5;

if (r === 8 || s === 8) {
  if (r === 8) {
    console.log("r è uguale a 8");
  } else {
    console.log("s è uguale a 8");
  }
} else {
  if (r + s === 8) console.log("la somma di r + s è uguale a 8");
}

console.log("****************************************************************");

/* ESERCIZIO 5
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del 
carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente 
ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const chart = {
  itemsPrice: [12, 35, 8, 10],
};

chart.partialTotal = chart.itemsPrice.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

console.log(`Total without sped ${chart.partialTotal}`);

if (chart.partialTotal > 50) {
  console.log(`Free shipping`);
  chart.totalShoppingCart = chart.partialTotal;
} else {
  console.log("caccia la moneta!");
  chart.totalShoppingCart = chart.partialTotal + 10;
}

console.log(`Total ${chart.totalShoppingCart}`);

console.log("****************************************************************");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
