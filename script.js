// Cliccando su play facciamo diventare visibile la griglia
const play =document.getElementById("play");
const grid = document.querySelector(".grid");
let score= 0;

play.addEventListener('click', startGame)
function startGame(){

    const arrayNumeri= randomNumber(16, 1, 100);
    console.log(arrayNumeri);


    // Facciamo apparire la griglia
    grid.classList.add('active');

    // Ripuliamo la griglia quando clicchiamo su play
    grid.innerHTML= '';

    // Creiamo 100 square
    for (let i = 1; i < 100 + 1; i++){
        
        // Tramite la funzione andiamo a creare i due elementi
        const newSquare = createGridSquare("div", "square");

        // Al click coloriamo lo square
        newSquare.addEventListener("click",
            function () {
                newSquare.classList.add("square-green");
                console.log(i);
                
                // Facciamo apparire i numeri all'interno degli square
                const span = document.createElement("span")
                span.append([i]);
                newSquare.append(span);

                // 
                if(arrayNumeri.includes(i)){
                    newSquare.classList.add("square-red");
                    console.log("bravo hai totalizzato", score, "punti");
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




