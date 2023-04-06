/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* //!ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
//*RISPOSTA 1
/* function area (l1, l2) {
    let area = l1 * l2;
    return area;
}
console.log(area(7, 3)) */

/* //!ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
//*RISPOSTA 2
/* function crazySum(n1, n2) {
    let sum = 0;
    if (n1 === n2) {
        sum = (n1 + n2) * 3;
    } else {
        sum = n1 + n2;
    }
    return sum;
}

console.log(crazySum(4, 3)) */


/* //!ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
//* RISPOSTA 3
/* function crazyDiff(n) {
    let diff = n - 19;
    if (diff>19) {
        diff *=3;
    }
    return diff;
}
let crazy = crazyDiff(41);
console.log(crazy); */


/* //!ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
//*RISPOSTA 4
/* function boundary(n) {
    if (n !== parseInt(n)) return "Inserire un numero intero";
    if (n>20 && n<= 100 || n === 400) return true;
    else return false
}
console.log(boundary(10)) */


/* //!ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
//*RISPOSTA 5
/* function codify(stringa) {
 if (stringa.startsWith("code")) return stringa
 else return "code" + stringa
}
console.log(codify("codebello"))
console.log(codify("bello")) */

/* //!ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
//* RISPOSTA 6
/* function check3and7(n) {
    if(n<0 || n!==parseInt(n)) return "Inserire un numero intero positivo"
    if(n%3===0 || n%7===0) {
        return true;
    } else {return false}
}
    console.log(check3and7(4)) */



/* //!ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
//*RISPOSTA 7
/* function reverseString(myString) {
    let splitString = myString.split("");
    let reverse = splitString.reverse();
    let reverseString = reverse.join("");
    return reverseString;
    }
console.log(reverseString("protonotaria")) */

/* function reverseString(myString) {
    let splitString = myString.split("").reverse().join("");
    return splitString;
    }
console.log(reverseString("protonotaria")) */


/* //!ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* function upperFirst(str) {
    str.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}
console.log(upperFirst("ciao belli")) */

/* function upperFirst(str) {
    let words = str.split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {
      let word = words[i];  
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  console.log(upperFirst("Ciao mondo sono marco!")); // Ciao Mondo! */

/* //!ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*///*RISPOSTA 9
/* function cutString(myString) {
    if (typeof myString === 'string') {
    let splittedString = myString.split("");
    console.log(splittedString);
    splittedString.splice(0,1);
    splittedString.pop(); 
    let finalString = splittedString.join("");
    return finalString;
    } else return "Inserire una stringa"
}
console.log(cutString("ciao a tutti")) */

/* //!ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
//*RISPOSTA 10
/* function giveMeRandom(n) {
    let array = [];
    let randomNum = 0;
    if (typeof n !== 'number') return "Inserire un numero"
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            randomNum = Math.floor(Math.random()*10);
            array.push(randomNum);
        } return array;
    } else return "Insrire un numero positivo"
}
console.log(giveMeRandom(4)) */
