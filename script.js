document.getElementById("frmPassagens").addEventListener("submit", function(event){ 
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obtém os valores dos campos do formulário
    var origem = document.getElementById("txtorigem").value;
    var destino = document.getElementById("txtdestino").value;
    var quantidadePassagens = document.getElementById("txtpassagens").value;
    var classe = document.getElementById("txtclasse").value;
    var idaVolta = document.getElementById("chkida_volta").checked;


    if (origem == "" || destino == "" || quantidadePassagens == "" || classe == "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (quantidadePassagens < 1) {
        alert("Informe um número válido de passagens!");
        return;
    }

    // Exibe os valores dos campos no console
    console.log("Origem:", origem);
    console.log("Destino:", destino);
    console.log("Quantidade de passagens:", quantidadePassagens);
    console.log("Classe:", classe);
    console.log("Passagens de ida e volta:", idaVolta);

    // Verificando se a cidade de destino é válida (está no banco de dados)
    if (!verificarCidade(destino)) {
        alert('Destino inválido! Por favor, escolha uma cidade válida.');
        return;
    }

    // Verificando se a opção de ida e volta está disponível para a cidade de destino
    if (!verificarIdaVolta(destino)) {
        alert('Opção de ida e volta não disponível para a cidade escolhida.');
        return;
    }
});

let db = {
    cidades: [
        {
            nome: "São Felipe",
            idaVolta: "Sim"
        },
        {
            nome: "Mombaça",
            idaVolta: "Não"
        },
        {
            nome: "Conceição do Almeida",
            idaVolta: "Sim"
        },
        {
            nome: "Sapeaçu",
            idaVolta: "Não"
        },
        {
            nome: "Cruz das Almas",
            idaVolta: "Sim"
        },
        {
            nome: "Gov. Mangabeira",
            idaVolta: "Não"
        },
        {
            nome: "São Felix",
            idaVolta: "Não"
        },
        {
            nome: "Salvador",
            idaVolta: "Sim"
        }
    ]
};


// Função para verificar se a cidade está no banco de dados
function verificarCidade(cidade) {
    // Percorre o array de cidades
    for (let i = 0; i < db.cidades.length; i++) {
        // Compara o nome da cidade com o parâmetro fornecido
        if (db.cidades[i].nome === cidade) {
            return true; // Retorna verdadeiro se a cidade existir no banco de dados
        }
    }
    return false; // Retorna falso se a cidade não existir no banco de dados
};

// Função para verificar se a opção de ida e volta está disponível para a cidade
function verificarIdaVolta(cidade) {
    // Percorre o array de cidades
    for (let i = 0; i < db.cidades.length; i++) {
        // Compara o nome da cidade com o parâmetro fornecido
        if (db.cidades[i].nome === cidade) {
            // Verifica se a opção de ida e volta está disponível para a cidade
            if (db.cidades[i].idaVolta === 'Sim') {
                return true; // Retorna verdadeiro se a opção de ida e volta estiver disponível
            } else {
                return false; // Retorna falso se a opção de ida e volta não estiver disponível
            }
        }
    }
    return false; // Retorna falso se a cidade não existir no banco de dados
};