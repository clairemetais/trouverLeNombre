
    // <----------------selection du niveau---------------------->
    let facile = document.getElementById("facile")
    let divFacile=document.getElementById("instructionFacile")
    let moyen = document.getElementById("moyen")
    let divMoyen=document.getElementById("instructionMoyen")
    let difficile = document.getElementById("difficile")
    let divDifficile=document.getElementById("instructionDifficile")
    var random = " "
    let nb = document.getElementById("nb")
    nb.disabled=true

    facile.addEventListener('click', (e) => {
      random = Math.floor(Math.random() * 21);
      console.log(random);
      moyen.style.visibility="hidden"
      difficile.style.visibility="hidden"
      divFacile.innerHTML="Tu dois saisir un nombre entre 0 et 20"
      nb.disabled=false
    })

    moyen.addEventListener('click', (e) => {
      random = Math.floor(Math.random() * 51);
      console.log(random);
      facile.style.visibility="hidden"
      difficile.style.visibility="hidden"
      divMoyen.innerHTML="Tu dois saisir un nombre entre 0 et 50"
      nb.disabled=false
    })

    difficile.addEventListener('click', (e) => {
      random = Math.floor(Math.random() * 101);
      console.log(random);
      moyen.style.visibility="hidden"
      facile.style.visibility="hidden"
      divDifficile.innerHTML="Tu dois saisir un nombre entre 0 et 100"
      nb.disabled=false
    })

    // <------------------------jeu ------------------------>

    let elButton = document.getElementById("analyse");
    let fin = document.getElementById("fin");
    elButton.disabled = false;
    var counter = 0;
    
    let resultat = document.getElementById("resultat");
    let chiffreSaisi=document.getElementById("chiffreSaisi")

    elButton.addEventListener("click", (e) => {
      counter++;
      console.log(counter);
      switch (counter) {
        case 1:
         if (random == nb.value) {
            resultat.innerHTML = `<span id="gros">GAGNÉ</span><br>le chiffre a deviner était ${random}`;
            chiffreSaisi.innerHTML+="" 
          } else if (nb.value > random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es au dessus du nombre`;
            fin.innerHTML = `Il te reste ${5-counter}  essais`;
            chiffreSaisi.innerHTML+=`Déjà ecrit :<br>le chiffre ${nb.value}<br>`
          } else if (nb.value < random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es en dessous du nombre`;
            fin.innerHTML = "Il te reste 4 essais";
            chiffreSaisi.innerHTML+=`Déjà écrit:<br> le chiffre ${nb.value}<br>`
          }
          nb.value=""
          break;
        
        case 2:
          if (random == nb.value) {
            resultat.innerHTML = `<span id="gros">GAGNÉ</span><br>le chiffre a deviner était ${random}`;
            fin.innerHTML = " "
            chiffreSaisi.innerHTML+=""
          } else if (nb.value > random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es au dessus du nombre`;
            fin.innerHTML = "Il te reste 3 essais";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          } else if (nb.value < random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es en dessous du nombre`;
            fin.innerHTML = "Il te reste 3 essais";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          }
          nb.value=""
          break;
        case 3:
          if (random == nb.value) {
            resultat.innerHTML = `<span id="gros">GAGNÉ</span><br>le chiffre a deviner était ${random}`;
            fin.innerHTML = " "
            chiffreSaisi.innerHTML+=""
            nb.value=""
          } else if (nb.value > random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es au dessus du nombre`;
            fin.innerHTML = "Il te reste 2 essais";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          } else if (nb.value < random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es en dessous du nombre`;
            fin.innerHTML = "Il te reste 2 essais";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          }
          nb.value=""
          break;
          
        case 4:
          if (random == nb.value) {
            resultat.innerHTML = `<span id="gros">GAGNÉ</span><br>le chiffre a deviner était ${random}`;
            fin.innerHTML = " "
            chiffreSaisi.innerHTML+=""
            
          } else if (nb.value > random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es au dessus du nombre`;
            fin.innerHTML = "Dernier essai";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          } else if (nb.value < random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es en dessous du nombre`;
            fin.innerHTML = "Dernier essai";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          }
          nb.value=""
          break;
        case 5:
          if (random == nb.value) {
            resultat.innerHTML = `<span id="gros">GAGNÉ</span><br>le chiffre a deviner était ${random}`;
            fin.innerHTML = " "
            chiffreSaisi.innerHTML+=""
          } else if (nb.value > random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es au dessus du nombre`;
            elButton.disabled = true;
            fin.innerHTML = "Désole c'etait ton dernier essai";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          } else if (nb.value < random) {
            resultat.innerHTML = `<span id="gros">PERDU</span><br>tu es en dessous du nombre`;
            elButton.disabled = true;
            fin.innerHTML = "Désole c'etait ton dernier essai";
            chiffreSaisi.innerHTML+=`le chiffre ${nb.value}<br>`
          }
           nb.value=""
          break;
        default:
          fin.innerHTML = " ";
          break;
      }

      elGros = document.getElementById("gros");
      elGros.style.fontSize = "45px";
      
    });
  