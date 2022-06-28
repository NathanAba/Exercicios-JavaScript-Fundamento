let nameSpaceship = prompt ("Qual o nome da nave?")

let letraInverter = prompt ("escolha uma letra para parar!")
let inverterName= ""

for(let i = nameSpaceship.length - 1; i >= 0 ;i--){
    inverterName+=nameSpaceship[i]
    if(nameSpaceship[i]== letraInverter)
    break
}
alert("Nome da nave: "+ nameSpaceship + "\nNovo nome: " + inverterName)
