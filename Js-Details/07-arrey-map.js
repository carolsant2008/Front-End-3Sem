const hobbies = [
    "Jogar basquete",
    "Conversar",
    "ouvir musica",
    "jogar video game",
    "fazer Brownie"
];

// arrey map e um metodo de classe arrey que intera sobre o arrey retornando um novo arrey, compondo um novo resultado para cada
//indice antigo, veja:

const novosHobbies = hobbies.map(() => {
    return `<p>${hobby}<p>`;
});

console.log(novosHobbies);
