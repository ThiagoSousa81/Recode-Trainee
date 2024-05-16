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
            nome: "São Félix",
            idaVolta: "Não"
        },
        {
            nome: "Salvador",
            idaVolta: "Sim"
        }
    ]
}

while (i < cidades.length) {
    console.log(numeros[i]);
    i++;
}
// Aqui você pode realizar qualquer outra operação com os dados, como enviar para um servidor via AJAX, por exemplo


