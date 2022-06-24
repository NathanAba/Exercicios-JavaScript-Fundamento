let nameNave = prompt("Qual o nome da nave?")
let SpaceDobra = prompt ("Deseja entrar em dobra espacial? \n1- Sim\n2- Não" )

let SpaceDobraValor = 0 

while (SpaceDobra == "1"){ // Se valor escolhido seja (1- sim) então Somar +1 SpaceDobraValor. Se for (2- Não), ele encerra a contagem com o Alert.
  SpaceDobraValor += 1
  SpaceDobra = prompt("Deseja realizar a proxima dobra?\n1- Sim\n2- Não")
  if (SpaceDobra == "2"){
    alert("Nave: "+ nameNave + "\nQuantidade de dobras= " + SpaceDobraValor)
  }
}

