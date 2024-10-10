/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}
console.log("L'area del rettangolo è uguale a:", area(2, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  let total = 0;
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      total = (num1 + num2) * 3;
      console.log(num1, "e", num2, "sono uguali, la somma è stata moltiplicata per 3, per un totale di", total);
      return;
    } else {
      total = num1 + num2;
      console.log(num1, "e", num2, "non sono uguali, la loro somma è", total);
      return;
    }
  } else {
    console.log("I parametri forniti non sono di tipo numerico");
  }
}

crazySum(2, 2);
crazySum(5, 2);
//crazySum("ciao", true);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1) {
  let absResult = 0;
  let absMult = 0;
  if (typeof num1 === "number") {
    if (num1 > 19) {
      absResult = Math.abs(num1 - 19);
      absMult = absResult * 3;
      console.log("il parametro ", num1, "è superiore a 19, la differenza assoluta è", absResult, "il risultato è stato moltiplicato per 3 ed è", absMult);
      return;
    } else {
      absResult = Math.abs(num1 - 19);
      console.log("il parametro", num1, "è inferiore a 19,la differenza assoluta è", absResult);
      return;
    }
  } else {
    console.log("I parametri forniti non sono di tipo numerico");
  }
}

crazyDiff(30);
crazyDiff(17);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if (typeof n === "number") {
    if (n >= 20 && n <= 100) {
      console.log(n, "è incluso tra 20 e 100");
      return;
    } else if (n === 400) {
      console.log(n, "è uguale a 400");
      return;
    } else {
      console.log(n, "non è incluso tra 20 e 100, e non è uguale a 400");
      return;
    }
  } else {
    console.log("I parametri forniti non sono di tipo numerico");
  }
}

boundary(35);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
  if (typeof string === "string") {
    let word = string;

    if (word.startsWith("Epicode")) {
      console.log(word);
      return;
    } else {
      word = "Epicode" + " " + string;
      console.log(word);
      return;
    }
  } else {
    console.log("Il parametro fornito non è una stringa");
  }
}
epify("che bello");
epify("Epicode");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
  if (typeof num === "number") {
    if (num % 3 === 0 || num % 7 === 0) {
      console.log(num, "è multiplo di 3 o 7");
      return;
    } else {
      console.log(num, "non è un multiplo di 3 o 7");
      return;
    }
  } else {
    console.log("I parametri forniti non sono di tipo numerico");
  }
}
check3and7(22);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
  if (typeof string === "string") {
    let word = string;
    word = word.split("");
    word = word.reverse();
    console.log(word.join("").toUpperCase());
    return;
  } else {
    console.log("Il parametro fornito non è una stringa");
  }
}
reverseString("Epicode");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
  let word = string;
}
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
