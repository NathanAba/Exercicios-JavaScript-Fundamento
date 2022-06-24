let anosLuzInicial = prompt("Qual a distância anos Luz desejada?")

let escolhaDeOption = prompt ("Escolha a Unidade de medida da distância:\n1 - Parsec(pc)\n2- Unidade Astronômica(AU)\n3- Quilômetros(km)")

let escolhaDeUnidade
let distanciaConvertida

switch (escolhaDeOption) {
  case "1":
    escolhaDeUnidade = "Parsec (pc)"
    distanciaConvertida = anosLuzInicial * 0.306601
    break
  case "2": 
  escolhaDeUnidade = "Unidade Astronomica (AU)"
  distanciaConvertida = anosLuzInicial * 63241.1     
    break
  case "3":
    escolhaDeUnidade = "Quilometros (Km)"
    distanciaConvertida = anosLuzInicial * 9.5 * Math.pow(10,12)   
    break
  default:
    escolhaDeUnidade = "Unidade não selecionada"
    distanciaConvertida = "Conversão fora do Escopo" 
  break  
}

alert("Distância Anos Luz: " + anosLuzInicial + "\n" + escolhaDeUnidade + "\n" +
distanciaConvertida)