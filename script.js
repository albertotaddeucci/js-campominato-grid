

//variabile difficolta
let difficoulty = 100

//bottone per giocare
const buttonPlay = document.getElementById("button-play");

buttonPlay.addEventListener("click",function(){

    //creazione griglia
    const gridElement = document.getElementById("grid")
    // const containerElement = document.getElementById("container")
    const randomNumbersArray = getRandomNumbersArray();
    
    for(let i = 0; i < 100; i++){
        const newElement = document.createElement("div");
        newElement.classList.add("col-1", "border-black", "border" ,"square");
        
        gridElement.append(newElement);
    
        // al click aggiungo classe active e numero in console
        newElement.addEventListener("click", function() {
    
            this.classList.toggle("active");
            console.log(randomNumbersArray[i]);    
                    
        });
    }
    
    
    // for(let i = 0; i < 10; i++) {

    //     const newRow = document.createElement("div");
    //     newRow.classList.add("row", "row-cols-auto","flex-wrap", "justify-content-center", "border");
       

    //     containerElement.append(newRow);
        

        
        
    
    // }


})




//funzione per array random    
function getRandomNumbersArray() {

    const numbersArray = [];

    while (numbersArray.length < difficoulty) {

        // Inserisco il numero solo se non è già presente
        const newNumber = generateRandomNumber(difficoulty);

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
    