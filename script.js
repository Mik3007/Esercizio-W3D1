/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numero1, numero2){
  if(numero1 === numero2){
    somma = (numero1 + numero2) * 3;
    return somma;
  } else{
    somma = numero1 + numero2;
    return somma;
  }
}

console.log(crazySum(20,20))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (num) {
   if ((num >= 20 <= 100) || numero === 400 ) {
   return true;
} else {
    return false;
}
}

console.log(boundary(150))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
// creare una funzione usando 3 passaggi : split che divide la parola in un arrat, reverse che la inverte, e join che la fa diventare nuovamente una sola parola.
// split "e","p","i","c","o","d","e" ---- reverse "e","d","o","c","i","p","e" ---- join "edocipe". 

function reverseString(stringa) {
 return stringa.split("").reverse("").join("");
}

let stringa = "EPICODE";

let stringaInvertita = reverseString(stringa);
console.log(stringaInvertita);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
// una funzione divindento sempre le paroli in array con split ---- poi usare .map(che trasforma ogni parola dell'array) concatenandolo a charAt(o) modificherà solo l'indice zero, poi slice ad indice (1) e concatenarlo a toLowerCase in modo che il resto sia tutto piccolo.

function upperFirst(frase){
  return frase
  .split(" ")
  .map(parola =>
    parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase())
    .join(" ")
}

let frase = "trasforma le prime lettere in maiuscole";
let fraseLetteraMaiuscola = upperFirst(frase);

console.log(fraseLetteraMaiuscola)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(numeri){
 let numeriCasuali =[];
 for( i=0; i < numeri;i++){
  numeriCasuali.push(Math.floor(Math.random() * 11));
 }
 return numeriCasuali
}
  let numeri = 10;
  let numeriRandom = giveMeRandom(numeri);
  console.log(numeriRandom);

//EXTRA:
/* ESERCIZIO 1                                                     
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.l1 l2 
*/

function area (l1, l2){
    return l1 * l2;
} 

console.log(area(11,12));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (numero){
  let differenza = Math.abs(numero - 19);
  if ( differenza > -19) {
    return differenza * 3;
  } else{
    return differenza;
  }
} 

console.log(crazyDiff(22))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa){
  if(stringa.includes("code")){
    return stringa;
  } else{
   return "code" + " " + stringa;
}
}

console.log(codify("sole"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numero){
  if(numero % 3 === 0 || numero % 7 === 0){
    return numero = true;
  } else{
    return numero = false;
  }
}

let numero = 11;
console.log(check3and7(numero))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(stringa){
  return stringa.slice(1, -1)
}

let string = "banana";

console.log(cutString(string))


