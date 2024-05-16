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
};

/* let i = 0;
while (i < db.cidades.length) {
    console.log(db.cidades[i].nome);
    i++;
} */

// Selecionando o corpo da tabela
let tableBody = document.getElementById('tableBody');

// Iterando sobre as cidades e preenchendo a tabela
db.cidades.forEach(function (cidade) {
    let row = document.createElement('tr'); // Criando uma nova linha

    let cellNome = document.createElement('td'); // Criando uma célula para o nome da cidade
    cellNome.textContent = cidade.nome; // Definindo o texto da célula como o nome da cidade
    row.appendChild(cellNome); // Adicionando a célula à linha

    let cellIdaVolta = document.createElement('td'); // Criando uma célula para a disponibilidade de ida e volta
    cellIdaVolta.textContent = cidade.idaVolta; // Definindo o texto da célula como a disponibilidade
    row.appendChild(cellIdaVolta); // Adicionando a célula à linha

    tableBody.appendChild(row); // Adicionando a linha ao corpo da tabela
});


// Função para renderizar as linhas da tabela com base nos dados fornecidos
function renderizarTabela(cidades) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
    cidades.forEach(function (cidade) {
        const row = document.createElement('tr');
        const cellNome = document.createElement('td');
        cellNome.textContent = cidade.nome;
        row.appendChild(cellNome);
        const cellIdaVolta = document.createElement('td');
        cellIdaVolta.textContent = cidade.idaVolta;
        row.appendChild(cellIdaVolta);
        tableBody.appendChild(row);
    });
}

// Event listener para o formulário de busca
document.getElementById('frmBusca').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const busca = document.getElementById('busca').value.toLowerCase(); // Obtém o valor da busca em minúsculas
    const resultados = db.cidades.filter(function (cidade) {
        return cidade.nome.toLowerCase().includes(busca); // Filtra as cidades que contêm a busca no nome
    });
    renderizarTabela(resultados); // Renderiza as cidades filtradas na tabela
});

// Renderiza todas as cidades ao carregar a página
renderizarTabela(db.cidades);


