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
    
    // Aqui você pode realizar qualquer outra operação com os dados, como enviar para um servidor via AJAX, por exemplo
});
