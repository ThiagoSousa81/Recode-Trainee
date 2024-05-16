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

let tableBody = document.getElementById('tableBody');


let i = 0;
while (i < db.cidades.length) {
    console.log(db.cidades[i].nome);
    i++;
}
// Aqui você pode realizar qualquer outra operação com os dados, como enviar para um servidor via AJAX, por exemplo


