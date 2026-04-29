// utilizado para filtrar um elemento dentro de um arrey, retorna apenas o encontrado

const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) => {
    return n == 100
});
// console.log(encontrado)

const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "verde",
        perfil:"M",
        quantidade: 10
    },
    {
        descricao: "Cropped",
        cor: "preto",
        perfil:"F",
        quantidade: 15
    },
    {
        descricao: "Moletom",
        cor: "cinza",
        perfil:"F",
        quantidade: 20
    },
    {
        descricao: "Camiseta",
        cor: "branca",
        perfil:"M",
        quantidade: 8
    }
];

const produtosfemininos = estoque.filter((produtos) => {
    return produtos.perfil =="F";
});

console.log("Produtos femeninos em estoque:");
console.log()//pula linha

//utilizar o foreach e exibir os textos confrome o exemplo abaixo 
produtosfemininos.forEach((item) => {
    console.log(`${item.cor}: ${item.quantidade} unidade(s) `);
})
//"Preto: 15 unidade(s)"
//"Cinza: 20 unidade(s)"