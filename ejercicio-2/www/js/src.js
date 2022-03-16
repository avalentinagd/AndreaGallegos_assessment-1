'use strict'


function userService(){
    let firstName = prompt("¿Cuál es tu nombre?");
    let lastName = prompt("¿Cuál es tu primer apellido?");
    let question = prompt("¿Te apetece un café? ¿si o no?");
    if (question === "si"){
        console.log(`¡Bienvenid@ ${firstName} ${lastName}! En breves recibirá su café calentito en casa.`);
    }else if (question === "no"){
        console.log(`¡Bienvenid@ ${firstName} ${lastName}! Hoy no hay café.`);
    }else{
        console.log("Debe responder 'si' o 'no', escrito en minúsculas.)");
    }
}
userService();