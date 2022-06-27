let Spaceship = prompt("Nome da espaço nave")

let letraParaSubstituir = prompt("Qual caracter deseja substituir?")

let letraSubstituida = prompt("Trocar por qual caracter?")

let newSpaceship = "" // variavel vazia para armazernar novo nome

for(let pos = 0; pos < Spaceship.length; pos++){ // (let pos = 0) defini uma váriavel para começar a contar do caracter 0. (pos < Spaceship;lenght) se a pos for menor que a quantidade de caracter do "spaceship", adicionar + uma posição (pos++)
  if(Spaceship[pos] == letraParaSubstituir){ //se a letra na posição selecionada for igual a letra para substituir
    newSpaceship += letraSubstituida // adicionar a letra na variável NewSpaceship
  } else { // senão, adicionar a letra que já esta na posição
    newSpaceship += Spaceship[pos]
  }
}

alert("O novo nome da nave é " + newSpaceship)