async function cadastrarContato(objetoContato) {
    console.log(objetoContato);
    let resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    });
}
function validarFormulario() {
    // alert("Olá eu fui clicado, top top!!");
    let Nome = document.getElementById("nome").value.trim();
    let Sobrenome = document.getElementById("sobrenome").value.trim();

    let quantidadeErros = 0;


    if (Nome.length == 0) {
        forError("nome");
        quantidadeErros++;
    } else {
        reiniciaBorda("nome");
    }

    if (Sobrenome.length == 0) {
        forError("sobrenome");
    } else {
        reiniciaBorda("sobrenome");
    }

    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatorio(s) nao preenchido(s).");
        quantidadeErros = 0;
    }
    let objetoContato = {
        Nome: Nome,
        Sobrenome: Sobrenome
    };

    let cadastrado = cadastrarContato(objetoContato);
    return false;


}

function forError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red"
}
function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none"
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("CEP invalido. O CEP deve conter 8 digitos");
        return false;
    }

    try {

        agurdandoCampos();

        let retorno = await fetch(`http://viacep.com.br/ws/01001000/json/`)
        let dados = await retorno.json();
        console.log(dados)

        document.getElementById("endereço").value = dados.logradouro;
        document.getElementById("bairro").value = dados.logradouro;
        document.getElementById("cidade").value = dados.logradouro;
        document.getElementById("estado").value = dados.logradouro;
    }

    catch {
        alert("Erro ao buscar o endereço");
    }
}

function agurdandoCampos() {
    document.getElementById("endereço").value = "Agurdando...";
    document.getElementById("bairro").value = "Agurdando...";
    document.getElementById("cidade").value = "Agurdando...";
    document.getElementById("estado").value = "Agurdando...";

}