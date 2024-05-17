# Relatório Recode Trainee 
### Por Thiago Sousa

## Introdução ao tema
<details><summary>Ver mais...</summary>

<b>JavaScript</b> é uma linguagem praticamente padrão quando se fala em desenvolvimento web. É impossível tornar uma página web dinâmica sem o seu uso. <br>
É uma linguagem de programação interpretada pelos navegadores, tendo como papel principal aplicar funcionalidade ao site. <br> A um tempo atrás, quando criada, era conhecida por <i>ECMA Script</i> e não era amplamente utilizada, pois era nociva aos navegadores nos primórdios da Arpanet, conhecida hoje por simplesmente Internet. Isso se devia pelo fato de a velocidade de banda velox (uma modalidade de distribuição de internet compartilhada pela linha telefônica, mais conhecida por linha discada) ter pouco mais de 64 kbps (kilobits por segundo) transferidos sem falha. Essa velocidade mal dava pra assistir um vídeo no YouTube livre de travamentos, quanto mais pra baixar scripts complexos e extensos, programados por verdadeiros artistas (e hackers).<br>
Porém, com o passar do tempo, o JavaScript se tornou um aliado fundamental nos cálculos e na validação de dados, reduzindo a taxa de processamento dos servidores remotos com tarefas simples que o dispositivo do usuário pode realizar por si só. <br>
Ante o exposto, a utilizção do JS é crucial para o desenvolvimento de plataformas devido à sua portabilidade e seu diferencial: o Modelo de Objeto de Documentos (DOM).


</details>

### Desenvolvimento da plataforma
<details><summary>Ver mais...</summary>
Bom, apesar de ter uma boa carga de conhecimento prático de programação, o JavaScript - assim como SQL - nunca foram o meu forte. Ter que utilizar JS puro pra mim é um bom desafio, principalmente pelo fato de meu domínio total da área ser baseado em linguagens orientadas a objeto de tipagem forte, como C#, PowerShell, Java, PHP, etc. <br>

Para dar início ao trabalho tive que escolher um tema relacionado à transportes. A RD Transportes foi a primeira coisa que me veio na cabeça, então não pude perder tempo. Fui entender o que deveria ser feito.<br>

Na formação anterior, fora solitado dos Trainees uma página estática com tema de Empresa de Turismo. Na atual foi solicitado o funcionamento dinâmico dessa página utilizando somente de JavaScript, sem mais nenhuma tecnologia adicional (se bem que eu gostaria muito de colocar um MySQLI ou um Postgree...). <br>

Os requisitos para a validação deste trabalho foram os seguintes:

> 1. O usuário deve colocar as informações em local de origem, local de destino, a quantidade de passagem e a classe. Todos esses dados devem ser validados na banco de dados (Array de Objetos)<br>
> 2. Sua aplicação deve fazer uma verificação dos dados, caso o usuário não digite algum dado, deve ter uma mensagem informado<br>
> 3. O usuário pode escolher se quer passagem de ida e volta, caso a opção não esteja disponível para aquela cidade o usuário deve ser informado<br>
> 4. O link “Ainda não sabe para onde ir? Encontre aqui” deve direcionar o usuário para outra página onde serão listadas todas as cidades<br>
> 5. Um alerta deve aparecer confirmando a busca de dados ao clicar no Botão.<br>

Para realização desses objetivos, fui começar do mais fácil em direção ao mais complexo. Assim comecei fazendo a validação dos dados:

    document.getElementById("frmPassagens").addEventListener("submit", function(event){ 
        event.preventDefault(); // Evita o envio padrão do formulário
        
        // Obtém os valores dos campos do formulário
        var origem = document.getElementById("txtorigem").value;
        var destino = document.getElementById("txtdestino").value;
        var quantidadePassagens = document.getElementById("txtpassagens").value;
        var classe = document.getElementById("txtclasse").value;
        var idaVolta = document.getElementById("chkida_volta").checked;

> Veja o trecho completo [aqui](https://github.com/ThiagoSousa81/Recode-Trainee/blob/2c1b005343a556109fedfdda0d7dc720024c976f/src/script.js#L9)

Validação de dados concluída, agora fazia-se necesário um banco de dados com as cidades.<br> Como não encontrei um pronto (padrão) no [repositório](https://github.com/LucianoSabino/Capacitacao-js_RecodeJr) me senti livre para criar de acordo meu tema. O resultado foi esse:

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
> Veja completo [aqui](https://github.com/ThiagoSousa81/Recode-Trainee/blob/2c1b005343a556109fedfdda0d7dc720024c976f/src/destinos.js#L1)

Eu propositalmente fiz uma redundância do mesmo <code>db.cidades</code> tanto no <code>[script.js](https://github.com/ThiagoSousa81/Recode-Trainee/blob/master/src/script.js)</code> quanto no <code>[destinos.js](https://github.com/ThiagoSousa81/Recode-Trainee/blob/master/src/destinos.js)</code>. Não encontrei uma forma de fazê-lo de forma rápida usando somente JS, porém num projeto real posso fazer não somente isso mas aplicar uma camada de encriptação durante a reserva das passagens.<br>

Com essa etapa pronta, foi o momento de desenvolver a página do [Encontre Aqui](https://thiagosousa81.github.io/Recode-Trainee/destinos.html). Para isso, tive que utilizar uma cadeia de laços de repetição, no intuito de os dados do objeto serem passados à tabela 

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

> Veja completo [aqui](https://github.com/ThiagoSousa81/Recode-Trainee/blob/2c1b005343a556109fedfdda0d7dc720024c976f/src/destinos.js#L44C1-L60C4)

Feito isso, fez-se necessário um campo de busca, então fiz assim

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

> Veja completo [aqui](https://github.com/ThiagoSousa81/Recode-Trainee/blob/2c1b005343a556109fedfdda0d7dc720024c976f/src/destinos.js#L79C1-L90C30)

Com a página dos destinos funcionando por completo fui fazer as últimas correções e o resultado do projeto foi [esse](https://thiagosousa81.github.io/Recode-Trainee/index.html).

> Link do trabalho final: https://thiagosousa81.github.io/Recode-Trainee/index.html

O <i>deploy</i> foi realizado utilizando o Git-Hub Pages, porém existem métodos melhores para uma aplicação real de grande porte funcionar, como Vercel, AWS, Heroku e Google Cloud. 

</details>
