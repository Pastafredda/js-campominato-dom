// Cliccando su play facciamo diventare visibile la griglia
const play =document.getElementById("play");
const grid = document.querySelector(".grid");

play.addEventListener('click',
    function(){

        // Facciamo apparire la griglia
        grid.classList.add('active');

        // Ripuliamo la griglia quando clicchiamo su play
        grid.innerHTML= '';

        // Creiamo 100 square
        for (let i = 1; i < 100 + 1; i++){
            
            // Tramite la funzione andiamo a creare i due elementi
            const newSquare = createGridSquare("div", "square");

            // Facciamo apparire i numeri all'interno degli square
            const span = document.createElement("span")
            span.append(i);
            newSquare.append(span);
        
            // Al click coloriamo lo square
            newSquare.addEventListener("click",
                function () {
                    newSquare.classList.add("square-green");
                    console.log(i);
                }
            )

            grid.append(newSquare);
    
        }
        
        // Creiamo gli elementi per inserirli nella griglia
        
    }
)

function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
    
}



