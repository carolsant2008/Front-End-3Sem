let frutasVermelhas = new Array();
let frutasCitricas = ["Limao", "Laranja", "Abacaxi", "Mexirica", "Acerola"];

frutasVermelhas.push("Morango")
frutasVermelhas.push("Maca")
frutasVermelhas.push("Amora")
frutasVermelhas.push("Cereja")

// console.log(frutasCitricas);
console.log(frutasVermelhas);
 const frutaRemovida = frutasVermelhas.pop();//retira o ultimo elemento do arrey
console.log(frutasVermelhas);

console.log(`${frutaRemovida} foi removida da cesta de frutas`);