window.onload = (event) => {
    if (sessionStorage.getItem("conso") != null) {
        consoPerso = parseFloat(sessionStorage.getItem("conso"))
    }
    div.style.backgroundImage = `url(image8.jpg)`;
    afficherConso(consoPerso)
}
fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques_tr?bss_id=BSS001TMCR&size=10&fields=date_mesure,profondeur_nappe&sort=desc")
    .then(res => res.json())
    .then(données =>{
        console.log(données.data[0].profondeur_nappe);
        document.getElementById('nappe-villeurbanne').innerText = "profondeur de la nappe : "+ données.data[0].profondeur_nappe+ " m"
})

let profondeurs = []
async function recupData () {
    const res = await fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques_tr?bss_id=BSS001TMCR&size=10&fields=date_mesure,profondeur_nappe&sort=desc")
    //console.log(res)
    const données = await res.json();
    console.log(données)
    for (let i = 0; i<données.data.length; i++){
        profondeurs.push(données.data[i].profondeur_nappe)
    }
    console.log(profondeurs)
}
recupData();

let today = new Date();
let minute = today.getMinutes()
let seconde = today.getSeconds()
//console.log(today.toString())
//console.log(minute)
function afficherConso (valeurconso) {
    document.getElementById('conso-seconde').innerText ="Depuis que vous êtes connecté.e vous avez consommé "+ (valeurconso.toFixed(2))+" mL";
}
console.log("sessionstorage",sessionStorage.getItem("conso"))
let consoPerso = 0
let compteur = setInterval(calculLitreParSecondeParPersonne,1000); 

 function calculLitreParSecondeParPersonne(){
    consoPerso += 1.73611;
    afficherConso(consoPerso);
    sessionStorage.setItem("conso", consoPerso);
    if (consoPerso>50){
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
let animation = anime({
    targets: '.drop-container',
    translateY: 150,
    duration: 1500,
    easing: 'linear',
    delay: anime.stagger(350),
    loop: true

    }
   ) 