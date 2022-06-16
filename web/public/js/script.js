$(()=>{

    // parâmetros globais
    const parametros = {
        dados: null,
        colunas: null,
        onde: '#minha_tabela',
        tabela: $().DataTable(),
        arquivos: ['artigos.csv'],
        arquivo_atual: 0
    }

    // plotando a tabela
    const plotar = ()=>{

        // desestruturando o objeto
        let { dados, colunas, onde, tabela } = parametros

        // destrua a tabela anterior
        tabela.destroy()

        // limpe o elemento html
        $(onde).empty()

        // primeira linha contém os nomes das colunas
        colunas = dados[0] 

        // remove a primeira linha (nome das colunas)
        dados.shift() 

        // selecionar colunas
        colunas = colunas.map(d => ({ title: d }))

        // ativar datatable
        parametros.tabela = $(onde).DataTable({
            "data": dados,
            "columns": colunas,
            "order": [[0, 'asc']] // ordena pela coluna 0
        })
    }

    // listar arquivos --> INÍCIO
    const listarArquivos = (arquivos)=>{

        // para cada arquivo
        for(i of arquivos){

            // adicione uma option no select
            $("#arquivos").append(
                "<option value='" + i + "'>" + i + "</option>"
            )

        }

    }
    // listar arquivos --> FIM

    // escolher arquivo atual --> INÍCIO
    const carregarArquivo = ()=>{

        let novo_arquivo = $("#arquivos").val()

        // atualizar o índice do arquivo atual
        parametros.arquivo_atual = parametros.arquivos.indexOf(novo_arquivo)
        
        // alterando o índice
        lerDados(novo_arquivo)

    }

    // ler dados --> INÍCIO
    const lerDados = (arquivo)=>{

        // ler arquivo usando jQuery
        $.ajax({
            url: arquivo,
            success: (dados)=>{
                dados_formatados = formatarTabela(dados)
                parametros.dados = dados_formatados

                plotar()
            }
        });
    }
    // ler dados --> FIM

    // formatar tabela --> INÍCIO 
    const formatarTabela = (dados)=>{

        let dados_tabelados = [];    
        
        // separa as linhas
        let linhas = dados.split("\n")

        // para cada linha
        for(let linha of linhas){

            // remove caracteres especiais 
            linha = linha.replace("\r","")

            // separa as células
            celulas = linha.split(";")

            // salva células
            dados_tabelados.push(celulas)
        }

        return dados_tabelados
    }
    // formatar tabela --> FIM 

    // iniciar
    const iniciar = ()=>{

        let { arquivos, arquivo_atual } = parametros

        // cria o select com o nome dos arquivos
        listarArquivos(arquivos)

        // lê os dados do arquivo selecionado
        lerDados(arquivos[arquivo_atual])

        // evento: seleciona outro arquivo
        $("#arquivos").on("change", ()=>{
            carregarArquivo()
        })

    }

    // executa
    iniciar()
    
})


// // // novo objeto XHR
// let xhr = new XMLHttpRequest();

// // // resposta deve estar em json 
// // xhr.responseType = "json";  

// // console.log("Escutando readyState:")

// // xhr.onreadystatechange = ()=>{

// //     // imprime os status atuais
// //     console.log(
// //         "readyState:", xhr.readyState, 
// //         "| Status:", xhr.status
// //     );
    
// //     // se o readyState estiver pronto (código 4)
// //     if(xhr.readyState == 4){

// //         // lê resposta
// //         let resposta = xhr.response;

// //         // imprime objeto no console
// //         console.log(resposta);

// //         // exibe a mensagem no site
// //         document.write(
// //             "A mensagem para a humanidade é:<br><br><strong>",
// //             resposta.mensagem,
// //             "</strong>"
// //         );
// //     }
// // }

// // // abre a requisição Ajax
// xhr.open("GET", "http://localhost:8080")
// xhr.send()

// let pessoas = ["José","Maria","Cláudio"];

// // iterator com for
// for(i in pessoas){
//     console.log(i, ":", pessoas[i]);
// }
// /*
//     0 : José
//     1 : Maria
//     2 : Cláudio
// */

// // iterator em jQuery
// $.each(pessoas, (i, j) => {
//     // i: índice; j: valor
//     console.log(i, ":", j);
// });
  

// // Implementando o iterator manualmente
// let it = pessoas[Symbol.iterator]()

// // pegando o primeiro elemento
// console.log(it.next())  // José

// // 2º e 3º elemento
// console.log(it.next().value)  // Maria
// console.log(it.next().value)  // Cláudio

// // Depois que acaba a lista
// console.log(it.next().value)  // undefined


// $("li").each((i) => {

//     console.log('aaaaaaaas')
//     console.log(i, ":", $(this).text());
// });
