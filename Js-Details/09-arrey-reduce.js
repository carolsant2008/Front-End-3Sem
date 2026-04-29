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

//reduz o arrey a um unico elemento. No caso somatorio, por exemplo:
let totalProdutosEmEstoque = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
},0);

console.log(`Total de produtos em estoque: ${totalProdutosEmEstoque}`);