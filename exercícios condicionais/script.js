let NomePiloto = prompt ("Bem Vindo a Nave MÃE! Insira seu nome!")
let Velocidade = 0
let VelocidadeMover = prompt ("Estamos a "+ Velocidade +" Km/s. Qual velocidade você gostaria de ir?")

let Confirmou = confirm ("Você tem certeza que quer andar a " + VelocidadeMover + " Km/s?") 

if (Confirmou == true) {
  Velocidade = VelocidadeMover
}

if (Velocidade <= 0 ) {
  alert ("A Nave está parada!")
} else if (Velocidade < 40) {
  alert("Você está devagar demais, podemos aumentar")
} else if (Velocidade < 80) {
  alert("Você está em uma boa velocidade")
} else if (Velocidade < 100) {
  alert("Velocidade Alta, diminua")
} else {
  alert("Você está muito rápido! Controle automático ATIVO!")
}

alert ("Seu nome é " + NomePiloto + "\nSua Velocidade é " + Velocidade)







