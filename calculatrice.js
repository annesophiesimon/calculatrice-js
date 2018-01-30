var affichage = document.getElementById("affichage");
var chiffres = document.querySelectorAll('.chiffre');
var operateurs = document.querySelectorAll('.operateur');
var egal = document.querySelector('.egal');
var effacer = document.querySelector('#effacer');
var decimal = document.querySelector('#decimal');
var pourcentage = document.querySelector("#pourcentage");
var resulat;

var clickHandler = function(evt) {
  console.log(evt.target.textContent);
  affichage.textContent += evt.target.textContent;
  return affichage.textContent;
}

for(var i = 0; i < chiffres.length; i++) {
  var chiffre = chiffres[i];
  chiffres[i].addEventListener('click', clickHandler);
}

for(var i = 0; i < operateurs.length; i++) {
  var operateur = operateurs[i];
  operateurs[i].addEventListener('click', clickHandler);
}
decimal.addEventListener('click', clickHandler);

pourcentage.addEventListener('click',function pourcentage() {
resultat = affichage.textContent/100;
affichage.textContent = resultat;
});


egal.addEventListener('click',function calculer() {
resultat = eval(affichage.textContent);
affichage.textContent = resultat;
});



effacer.addEventListener('click',function effacer() {
affichage.textContent = "";

})


document.addEventListener('keypress', (event) => {
  var nomTouche = event.key;
  console.log(event.key);
  var touche = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
  for (var i=0;i<touche.length;i++) {
      if(nomTouche==touche[i]) {
        affichage.textContent += nomTouche;
      }
    else if (nomTouche=="Enter"){
      resultat = eval(affichage.textContent);
      affichage.textContent = resultat;
    }
    else if(nomTouche=="Backspace") {
      affichage.textContent = "";
    }
  
  }

});
