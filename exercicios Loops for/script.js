let SpaceshipName = prompt("Nome da espaço nave")
let SpaceshipCaracter = prompt("Qual letra deseja substituir?")
let SpaceshipSubstitute = prompt("Trocar por qual letra?")

let newNameSpaceship = ""

for ( ; ;) {
  if(SpaceshipCaracter == SpaceshipName){
    newNameSpaceship += SpaceshipSubstitute
  }else {
    newNameSpaceship += SpaceshipName[i]
  }
}
alert("O novo nome da nave é " + newNameSpaceship)