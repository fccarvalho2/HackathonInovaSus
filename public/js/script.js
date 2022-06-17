$(()=>{

    // parâmetros globais
    const parametros = {
        dados: null,
        colunas: ["titulo", 	"link",	"data",	"tipo",	"issn",	"journal_name",	"qualis",	"fator_impacto_jrc",	"hindex",	"media_citacao_3_anos",	"abstract",	"categorias"],
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
        //console.log(dados)
        // ativar datatable
        parametros.tabela = $(onde).DataTable({
            "data": dados,
            "columns": 
            colunas,"columnDefs": [
                { "width": "35%", "targets": 0 },
                { "width": "15%", "targets": 5 }
              ],
            "order": [[3, 'desc']] // ordena pela coluna 0
        })

        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
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
            celulas = linha.split("\t")

            //[0'titulo', 1'link', 2'data', 3'tipo', 4'doi', 5'issn', 6'issn_formatado', 7'journal_name', 8'qualis', 9'fator_impacto_jrc', 10'hindex', 11'media_citacao_3_anos', 12'abstract', 13'categorias', 14'categories']


            resumo=celulas[12].replace(/[^a-z0-9 ,\.]/gi,'');
            if(resumo == ''){
                resumo="Resumo não disponível";
            }
            cf = [] //celulas_filtradas
            cf.push(
                '<a data-bs-trigger="hover focus" data-bs-toggle="popover" target="blank" title="Resumo" data-bs-content="'+resumo+'" href="'+celulas[1]+'">'+celulas[0]+'</a>',
                celulas[7]+" ("+celulas[6]+")", 
                celulas[8], // qualis
                celulas[10], // hindex
                celulas[9], // jrc - fator impacto
                celulas[13] // categorias
            )
            //console.log(cf)

            // salva células
            dados_tabelados.push(cf)
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
