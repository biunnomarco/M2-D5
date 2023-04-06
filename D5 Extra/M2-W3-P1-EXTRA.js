// Esercizi aggiuntivi

/* //!EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
//*RISPOSTA 1
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
causalArray = giveMeRandom(4)
console.log(causalArray)

function checkArray(arr) {
    let somma = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 5) {
            console.log(true);
            somma += arr[index]
        }
        else console.log(false);
    }
    return somma;
}
console.log("La somma dei numeri superiori a 5 è: " + checkArray(causalArray)) */

/* //!EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/
//* RISPOSTA 2
let shoppingCart = [
    {
        prezzo: 45,
        name: 'Lampada',
        id: '123',
        quantità: 12,
    },
    {
        prezzo: 12,
        name: 'Mouse',
        id: '456',
        quantità: 6,
    },
    {
        prezzo: 345,
        name: 'Monitor',
        id: '789',
        quantità: 1,
    },
]
/* function shoppingCartTotal(arr) { 
    let tot = 0; 
    let parziale = 0; 
    for (let i = 0; i < arr.length; i++) { 
        parziale = arr[i].prezzo * arr[i].quantità;
        tot += parziale;
    }
    return tot;
}
console.log(shoppingCartTotal(shoppingCart)); */

/* //!EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/
//* RISPOSTA 3
/* let shoppingCart = [
    {
        prezzo: 45,
        name: 'Lampada',
        id: '123',
        quantità: 12,
    },
    {
        prezzo: 12,
        name: 'Mouse',
        id: '456',
        quantità: 6,
    },
    {
        prezzo: 345,
        name: 'Monitor',
        id: '789',
        quantità: 1,
    },
] */

/* let aggiunta = {
    prezzo: 20,
    name: 'Tastiera',
    id: '147',
    quantità: 3,
}
function addToShoppingCart(oggetto) {
    shoppingCart.push(oggetto);
}
console.log(addToShoppingCart(aggiunta));
console.log("Il numero degli oggetti nel carrello è: " + shoppingCart.length); */

/* //!EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
//*RISPOSTA 4
/* function maxShoppingCart(array) {
    let max = 0;
    let maxI = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].prezzo>max) {
            max = array[i].prezzo
            maxI = i;        
        }
    }
    return maxI;
}
let maxCost = (maxShoppingCart(shoppingCart));
console.log("L'oggetto più costoso è: " + shoppingCart[maxCost].name + " con un costo di: " + shoppingCart[maxCost].prezzo + " euro") */

/* //!EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/
//*RISPOSTA 5
/* function latestShoppingCart(array) {
    let latest = array.length - 1;
    return latest;
}
let ultimo = latestShoppingCart(shoppingCart);
console.log("L'ultimo articolo aggiunto al carrello è: " + shoppingCart[ultimo].name) */

/* //!EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
//* RISPOSTA 6
/* function loopUntil(x) {
    if (x<0 || x>9) return "Inserire un numero tra 0 e 9"
    let random = 0;
    for (let i = 0; i < 3;) {
        random = Math.floor(Math.random()*10);
        if (random>x) {
            console.log(random);
            i++
        }
    }
}
console.log(loopUntil(4)) */


/* //!EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
//*RISPOSTA 7
/* let numbers = [1,2,1,2,1,'pollice',2];
function average(array) {
    let media = 0;
    let somma = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            counter++;
        }
        else {
            somma += array[i]; 
        }       
    }
    media = somma / (array.length - 1);
    return media;
}
console.log(average(numbers)) */


/* //!EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
//*RISPOSTA 8
/* let stringArray = ["abaco", "tugurio", "protonotaria", "i topi non avevano nipoti"];
function longest(array) {
    let long = 0;
    let longI = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length>long) {
            long=array[i].length;
            longI = i;
        }
    } return longI;
}
let longString = longest(stringArray);
console.log("La stringa più lunga dell'array è: " + stringArray[longString]); */

/* //!EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/
//*RISPOSTA 9
/* let mail = "Questa mail contiene polistirolo e SPAM";
function emailContent(string) {
    let stringLow = string.toLowerCase();
    if (stringLow.includes("spam") || stringLow.includes("scam")) return false;
    else return true;
}
console.log(emailContent(mail)); */

/* //!EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

//*RISPOSTA 10
//? let input = window.prompt("Inserire una data nel formato aaaa-mm-gg");
/* let input = "2024-04-06";
function dataDiff(whatDate) {
    let oggi = new Date();
    let data = new Date(whatDate);
    let diff = 0;
    if (oggi>data) {
        diff = parseInt((oggi - data) / 86400000);
        console.log("Sono passati " + diff + " giorni!!")
    } else {
        diff = parseInt((data - oggi) / 86400000);
        console.log("Mancano " + diff + " giorni!!")
    }
    return diff;
}
dataDiff(input); */



/* //!EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
//*RISPOSTA 11
/* function matrixGenerator(x, y) {
    let matrix = [];
    let counter = 0;
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = j + counter;            
        }
        counter += 10;
    }
    return matrix;
}
console.log(matrixGenerator(4,3)) */
