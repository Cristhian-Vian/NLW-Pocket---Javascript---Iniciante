// Importação do módulo inquirer
const { select, input, checkbox } = require('@inquirer/prompts')
// Importação do módulo fs
const fs = require("fs").promises

// Variavel de controle das mensagens
let mensagem = "Bem vindo ao app de Metas!";

// Variavel de controle que armazena as metas
let metas

// Função para ler e carregar as metas do arquivo <metas.json>
const carregarMetas = async () => {
    // Tenta ler os dados do arquivo <metas.json> e armazena na variavel <metas>
    try {
        const dados = await fs.readFile("metas.json", "utf-8") // Faz a leitura dos dados no arquivo <metas.json>
        metas = JSON.parse(dados) // Transforma os dados de JSON para JS
    }
    // Se a leitura der errado, retorna um array vazio na variavel <metas>
    catch (erro) {
        metas = [] // array vazio
    }
}

// Função para escrever e salvar as metas no arquivo <metas.json>
const salvarMetas = async () => {
    await fs.writeFile(
        "metas.json", // define em qual arquivo será escrito os dados
         JSON.stringify(metas, null, 2) // transforma os dados de JS para JSON
    )
}

// Função para cadastrar as metas
const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})
    
    if (meta.length == 0) {
        mensagem = "A meta não pode ser vazia."
        return // Retorna para o while do menu, encerrando a função cadastrarMeta
        //return cadastrarMeta() // Retorna para a função cadastrarMeta até o usuario digitar algo
    }

    metas.push(
        {value: meta, checked: false}
    )

    mensagem = "Meta cadastrada com sucesso!"
}

// Função para listar as metas
const listarMetas = async () => {
    // Função para verificar se não há metas
    // if (listarMetas.length == 0) {
    //     mensagem = "Não existem metas!"
    //     return
    // }

    const respostas = await checkbox({
        message: "Use as Setas para mudar de meta, o Espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        choices: [...metas],
        instructions: false // para desabilitar as instruções default do console em inglês
    })

    // Função para alterar o valor de checked para False nas metas não marcadas como concluidas
    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    // Função para alterar o valor de checked para True nas metas que foram marcadas como concluidas
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = "Meta(s) marcada(s) como concluída(s)"
}

// Função para exibir as metas realizadas
const metasRealizadas = async () => {
    // Função para verificar se não há metas
    // if (listarMetas.length == 0) {
    //     mensagem = "Não existem metas!"
    //     return
    // }

    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        mensagem = "Não existem metas realizadas! ☹️"
        return
    }

    await select({
        message: "Metas realizadas (" + realizadas.length + ")",
        choices: [...realizadas]
    })
}

// Função para exibir as metas em aberto
const metasAbertas = async () => {
    // Função para verificar se não há metas
    // if (listarMetas.length == 0) {
    //     mensagem = "Não existem metas!"
    //     return
    // }

    const abertas = metas.filter((meta) => {
        return !meta.checked // Outra opção de escrita: return meta.checked != true
    })

    if (abertas.length == 0) {
        mensagem = "Não existem metas abertas! 🙂"
        return
    }

    await select({
        message: `Metas abertas (${abertas.length})`,
        choices: [...abertas]
    })
}

// Função para deletar metas
const deletarMetas = async () => {
    // Função para verificar se não há metas
    // if (listarMetas.length == 0) {
    //     mensagem = "Não existem metas!"
    //     return
    // }

    // Percore o array de metas e retorna todas as metas com o valor de checked False (desmarcadas)
    const metasDesmarcadas = metas.map((meta) => {
        return {
            value: meta.value, // Mantem o valor original da propriedade value
            checked: false // Altera o valor da meta para False
        }
    })

    // Lista as metas para serem deletadas no formato de checkbox
    const itensParaDeletar = await checkbox({
        message: "Selecione um item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false
    })

    // Verifica se a lista de itens para deletar esta vazia
    if (itensParaDeletar.length == 0) {
        mensagem = "Nenhum item para deletar!"
        return
    }

    // Percorre o array <itensParaDeletar> e substitui os itens de forma agressiva
    // Se o item estiver marcado no checkbox do console, ele não entra no novo array <metas>
    itensParaDeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
    
    mensagem = "Meta(s) deletada(s) com sucesso!"
}

// Função para o sistema de mensagens do app (limpar o console e exibir mensagens)
const mostrarMensagem = () => {
    console.clear(); // Limpa as informações do terminal

    if (mensagem != "") {
        console.log(mensagem) // Exibe a mensagem no terminal
        console.log("") // Exibe uma linha vazia no terminal para efeito de espaçamento
        mensagem = "" // Torna a variavel mensagem vazia
    }
}

// Função principal para iniciar a aplicação
const start = async () => { 
    // Executa a função <carregarMetas> ao inicializar o app
    await carregarMetas();  
    while (true) { 
        // Executa a função de mensagens a cada iteração do console
        mostrarMensagem();

        // Executa a função de salvar as metas no arquivo <metas.json>
        await salvarMetas();

        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
};

// Executa a função start e inicia o programa no terminal
start();