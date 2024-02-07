


//variabile difficolta

const gridElement = document.getElementById("grid")

//bottone per giocare
const buttonPlay = document.getElementById("button-play");

let randomNumbersArray;
let cellNum;

buttonPlay.addEventListener("click",function(){
    let selectDiff = document.getElementById("select").value;
    gridElement.innerText = ""
        
    
    if (selectDiff == 1){
        cellNum = 100    
        randomNumbersArray = getRandomNumbersArray(cellNum)  
        createGrid(cellNum,10);

        
    } else if (selectDiff == 2){
        cellNum = 81
        randomNumbersArray = getRandomNumbersArray(cellNum)  
        createGrid(cellNum,9);
        
        
    } else if (selectDiff == 3){
        cellNum = 49
        randomNumbersArray = getRandomNumbersArray(cellNum)  
        createGrid(cellNum,7);
    }
    
    
})



//funzione crea griglia
function createGrid(cellNum,numberCol){
    
    
    for(let i = 0; i < cellNum; i++){
        const newElement = document.createElement("div");
        newElement.classList.add("col-auto", "border-black", "border" ,"square");
        newElement.style.width = `calc(100%/${numberCol})`;
        
        gridElement.append(newElement);
        
        // al click aggiungo classe active e numero in console
        newElement.addEventListener("click", function() {
            
            this.classList.toggle("active");
            console.log(randomNumbersArray[i]);    
            
        });

    
    }
            
    
}



//funzione per array random    
function getRandomNumbersArray(maxNumArray) {

    const numbersArray = [];

    while (numbersArray.length < maxNumArray) {

        // Inserisco il numero solo se non è già presente
        const newNumber = generateRandomNumber(maxNumArray);

        if( ! numbersArray.includes(newNumber) ) {

            numbersArray.push(newNumber);

        }
    }

    return numbersArray;

}
    
    
// funzione che genera un numero random
function generateRandomNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    return randomNumber;
}
    
