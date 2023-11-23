let today = new Date();
let minute = today.getMinutes()
let seconde = today.getSeconds()
console.log(today.toString())
console.log(minute)

let consoPerso = 0
let compteur = setInterval(calculLitreParSecondeParPersonne,1000); 

 function calculLitreParSecondeParPersonne(){
    document.getElementById('conso-seconde').innerText ="Depuis que vous êtes connecté.e vous avez consommé "+ (consoPerso.toFixed(2))+" mL";
    consoPerso += 1.73611;
    if (consoPerso>20){
         clearInterval(compteur)  
    }
 }

let consoJour = 0;
function getConsoJour(date) { 
    let hourNow = date.getHours();
    let minuteNow = date.getMinutes();
    let consoHeures =(hourNow*3600)*1.74;
    let consoMinutes = (minuteNow*60)*1.74;
    let consoJour = ((consoHeures+consoMinutes)/1000).toFixed(2);
    //console.log(consoHeures);
    //console.log(consoMinutes);
    document.getElementById('conso-jour').innerText += "Vous avez déjà consommé "+consoJour+" L d'eau potable en moyenne aujourd'hui!"
    //console.log(document.getElementById('conso-jour'))
}
getConsoJour(today)


// let consoMetropole = 0
// 
// function calculLitreParSecondeParPersonneMetropole(){
//      console.log((consoPerso.toFixed(2))+" L");
//      consoMetropole += 2459.12212;
//      if (consoMetropole>20){
//          clearInterval(consoMetropole)
//  }
// }