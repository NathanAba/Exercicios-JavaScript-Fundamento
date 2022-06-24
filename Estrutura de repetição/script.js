/* let velocity = 50
let acceleration = 5

while (velocity <= 100) { //While vai repetir a expressão até chegar igual a 100
  console.log ("Estamos a " + velocity + " Km/s")
  velocity += acceleration // += é igual (velocity = velocity + acceleration)
} */


// Exemplo 2


let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
  if(constellation[pos] == "a" || constellation[pos] == "A") {
    console.log(pos)
  }
  pos += 1
}