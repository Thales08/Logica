/**
 * Estudo da estrutura switch case
 * @author Thales Durães
 */
// a linha abaixo gera um número aleatório entre 0 a 5
// Math.floor (converte para número inteiro)
 let face = Math.floor(Math.random() * 6) + 1
 
 
 switch (face){
     case 1:
     // a linha abaixo "captura o id dp documento .html (DOM)"
     document.getElementById("dado").src = "face1.png"
     break

     case 2:
     document.getElementById("dado").src = "face2.png"
     break

     case 3:
     document.getElementById("dado").src = "face3.png"
     break

     case 4:
     document.getElementById("dado").src = "face4.png"
     break

     case 5:
     document.getElementById("dado").src = "face5.png"
     break

     case 6:
     document.getElementById("dado").src = "face6.png"
     break

 }