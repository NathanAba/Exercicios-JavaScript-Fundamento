let bornDateEntry = prompt("Digite a data de Nascimento (DD/MM/YYYY)")


let bornDate = moment( bornDateEntry, "DD/MM/YYYY")// Vai pegar a data em forma de string e transformar a data em um modo que o moment consiga entender (transforma em milisegundos)

let today = moment() // Retorna a data de hoje

let dateDiff = today - bornDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo \n1 - Segundos \n2 - Minutos\n3 - Horas\n4- Dias")

if (chosenOption == 1) {
  let secondsOfborn = Math.round(dateDiff / 1000) // Ira definir a quanto tempo a nave partiu e o (Math.round) arredonda o valor da divisão da dateDiff/1000
  alert("tempo de vôo: " + secondsOfborn + " Segundos")
}else if (chosenOption == 2) { 
  let minutesOfborn = Math.round(dateDiff / 1000 / 60)
  alert("tempo de vôo: " + minutesOfborn + " Minutos")
}else if (chosenOption == 3){
  let hoursOfborn = Math.round(dateDiff/ 1000 / 3600)
  alert("Tempo de vôo: "+ hoursOfborn + " horas")
}else if (chosenOption == 4){
  let daysOfborn = Math.round(dateDiff/ 1000 / 3600 /  24)
  alert("Tempo de vôo: "+ daysOfborn + " Dias")
}else {
  alert("Opção inválida")
}