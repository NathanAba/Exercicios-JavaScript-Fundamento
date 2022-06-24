let Spaceship = "Helmet"
let NewSpaceship = ""
  //<Váriavel>;    <expressão>;     <Ação controle>
for(let i = 0; i < Spaceship.length; i+= 1) { // Executar for ate expressão for 6 (Quantidade de letras "Helmet"). i+= 1 seria (1 + 1 + 1 ) Serve para passar sobre cada caracter.
  if( Spaceship [i] == "e"){ // se (o caracter selecionado i) for "e", trocar pela letra I
    NewSpaceship += "i"
  }else { // senão, continuar o caracter normal seleciionado [i].
    NewSpaceship += Spaceship[i]
  }
}