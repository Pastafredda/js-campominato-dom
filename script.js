// Cliccando su play facciamo diventare visibile la griglia
const play =document.getElementById("play");
const grid = document.querySelector(".grid");
const elDifficulty= document.getElementById("difficulty");
let score= 0;

play.addEventListener('click', startGame)
function startGame(){

    // Facciamo apparire la griglia
    grid.classList.add('active');

    // Ripuliamo la griglia quando clicchiamo su play
    grid.innerHTML= '';

    let numCelle ;
    let classe;
    const difficulty= elDifficulty.value;

    if(difficulty === "easy"){
        numCelle = 100;
        classe="square-easy";

    }else if(difficulty === "normal"){
        numCelle = 81;
        classe="square-normal";

    }else if(difficulty === "hard"){
        numCelle = 49;
        classe="square-hard";

    }
    let arrayNumeri= randomNumber(16, 1, numCelle);
    console.log(arrayNumeri);
    // Creiamo 100 square
    for (let i = 1; i <= numCelle ; i++){
        
        // Tramite la funzione andiamo a creare i due elementi
        const newSquare = createGridSquare("div", "square");
        newSquare.classList.add(classe);

        // Al click coloriamo lo square
        newSquare.addEventListener("click",
            function () {
                newSquare.classList.add("square-green");
                console.log(i);
                
                // Facciamo apparire i numeri all'interno degli square
                const span = document.createElement("span")
                span.append([i]);
                newSquare.append(span);

                //se lo square ha la proprietà square-green, allora non metto lo span
               
                // se i numeri corrispondono a quelli presenti nell'array creato con i numeri random
                if(arrayNumeri.includes(i)){
                    // allora aggiungiamo la classe square-red che rappresenta la bomba
                    newSquare.classList.add("square-red");
                    console.log("bravo hai totalizzato", score, "punti");
                    // altrimenti il punteggio sale e continua il gioco
                }else{
                    ++score
                    console.log("il tuo punteggio è", score);
                }
            }
        )
        grid.append(newSquare);
    }
}

// Funzioni

// Creiamo gli elementi per inserirli nella griglia
function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
    
}

// Creiamo l'array di numeri casuali in un range 
function randomNumber(numeroBombe,min, max){
    const arrayCasuale= [];
    // Finchè non raggiungi la fine dell'array
    while(arrayCasuale.length < numeroBombe){ 
        // Crei un numero casuale 
        const nuovoNumero= randomMinMax(min, max);
        // Se nell'array non è incluso un nuovo numero
        if(!arrayCasuale.includes(nuovoNumero)){
            // Allora lo pushiamo cosi evitiamo di pushare due o più numeri uguali
            arrayCasuale.push(nuovoNumero);
        }
    }
    return arrayCasuale;
}

function randomMinMax (min, max){
    return Math.floor(Math.random()* ( max - min + 1)) + min;
}




