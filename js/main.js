/* 
Descrizione:

Visualizzare in pagina (html) 5 numeri casuali.

Avviare un timer di 30 secondi

Dopo 30 secondi, nascondere i numeri.

L’utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, 
 tramite un prompt().

Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare
 sono stati individuati.
*/

// prendere il mio elemento html per cambiare il tempo
const timer30SecondiContainer = document.getElementById("timer30Secondi");

document.getElementById("containerNone").style.visibility = "hidden"
//prendo il mio button html per far comparire il prompt
const clickReady = document.getElementById("imReady")
document.getElementById("imReady").style.visibility = "hidden"

//prendo anche il mio button per far avvenire l'evento al click
const playTimer = document.getElementById("playTimer");
document.getElementById("playTimer").style.visibility= "visible"

// prendo il risultato finale del mio gioco da mostrare all'utente
const result = document.getElementById("result")

// creo i miei array:
//creo il mio array di numeri
const numeriGame = [3,4,5,1,19];
console.log(numeriGame)
//Il primo array conterrà i numeri che l'utente inserisce tramite il prompt 
const numeriInseritiUtente= [];
//Il secondo array conterrà i numeri giusti che l'utente ha inserito
const numeriGiusti = [];
// avvio del timer di 30 secondi
playTimer.addEventListener("click",function(){
    document.getElementById("containerNone").style.visibility = "visible";
    
    
    // calcolo di 30 secondi in millesecondi
    //secondi totali che devo conoscere per far decrescere il mio timer
    let secondiTotali = 1 * 30;
    
    // avvio un timer di 30 secondi
    let timer = setInterval(function () {
        secondiTotali--;
        
        const ore = Math.floor(secondiTotali/ 3600);
        const minuti = Math.floor((secondiTotali % 3600) /60);
        const secondi = secondiTotali % 60;

        timer30SecondiContainer.innerHTML= 
        ore.toString().padStart(2, "0") + 
        ":" +
        minuti.toString().padStart(2, "0") + 
        ":" + 
        secondi.toString().padStart(2, "0");

        console.log(secondiTotali);

        // creo la condizione per far fermare il timer a 0 e non farlo continuare a scendere
        if(secondiTotali === 0){
            clearInterval(timer);
            document.getElementById("containerNone").style.visibility = "hidden"
            document.getElementById("playTimer").style.visibility = "hidden"
            document.getElementById("imReady").style.visibility = "visible"
        }

    },1000)
    
})



clickReady.addEventListener("click", function(){
// creo un ciclo in cui chiederò all'utente di inserire i numeri visti prima
for(let i = 1; i <=5  ;i++){
    const askUtente = parseInt(prompt("Scrivi qui i numeri appena visti"))
    numeriInseritiUtente.push(askUtente);
    console.log(numeriInseritiUtente)
}

for(let i = 0; i < numeriInseritiUtente.length; i++) {

    // creo le mie condizioni per verificare quanti numeri ha ricordato l'utente
    if(numeriInseritiUtente[i].toString() === numeriGame[i].toString()){
        numeriGiusti.push(numeriInseritiUtente[i]);
        result.innerHTML= `Hai ricordato ${numeriGiusti.length} numeri, ovvero ${numeriGiusti.join(",")} `
    }else{
        result.innerHTML = `Non hai ricordato nemmeno un numero,riprova!`
    }
}
})