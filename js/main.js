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

//prendo anche il mio button per far avvenire l'evento al click
const playTimer = document.getElementById("playTimer");

// avvio del timer di 30 secondi
playTimer.addEventListener("click",function(){
    document.getElementById("containerNone").style.visibility = "visible";
    
    
    // calcolo di 30 secondi in millesecondi
    //secondi totali che devo conoscere per far decrescere il mio timer
    let secondiTotali = 1 * 30;
    
    // avvio un timer di 30 secondi
    setInterval(function () {
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
    },1000)
    clearInterval(playTimer);
})