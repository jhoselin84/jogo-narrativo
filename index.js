/**
 * jogo da floresta 
 */



const prompt = require("prompt-sync")()



let nomeJogador
let quantidadePocoes = 0
let jogando = true
let loboApareceu = false

let posicao = 0
let objetivo = 5

nomeJogador = prompt("Digite seu nome: ")

console.log("Bem-vindo, " + nomeJogador)

console.log("1 - Jogar")
console.log("2 - Sair")

let opcao = prompt("Escolha uma opção: ")

console.log("==================")

if (opcao == "1") {

    while (jogando) {

        console.log("1 - Direita")
        console.log("2 - Centro")
        console.log("3 - Esquerda")

        let caminho = prompt("Escolha um caminho: ")

        if (caminho == "1" || caminho == "2" || caminho == "3") {

            let sorte = Math.floor(Math.random() * 4)


            if (sorte == 0) {

                console.log("🐺 Você encontrou o lobo! Game Over!")
                jogando = false
                prompt("Pressione ENTER para continuar...")

            } else {

                // CHARADA aqui

                // RESPOSTA
                console.log("======================================")
                console.log("📖 CHARADA DA FLORESTA")
                console.log("======================================")
                console.log("Na versão original de Charles Perrault,")
                console.log("qual é o destino da Chapeuzinho no final?")
                console.log("")
                console.log("1 - Ela é salva por um caçador")
                console.log("2 - Ela e a avó são devoradas pelo lobo")
                console.log("3 - Ela foge sozinha")
                console.log("======================================")

                let resposta = prompt("👉 Resposta: ")

                if (resposta == "2") {

                    console.log("")
                    console.log("✔️ RESPOSTA CORRETA!")
                    console.log("🌲 Você avançou mais um passo na floresta!")

                    posicao++

                } else {

                    console.log("")
                    console.log("❌ RESPOSTA ERRADA!")
                    console.log("✅ A resposta correta era:")
                    console.log("2 - Ela e a avó são devoradas pelo lobo")
                    console.log("🌲 Você está mais mais longe da casa da vovó...")
                    console.log("Progresso: " - posicao - "/" - objetivo)

                    posicao--

                    console.log("↩️ Você voltou um passo na floresta...")
                }
                
                if (posicao < 0) {

                    posicao = 0

                }

                console.log("🌲 Você está mais perto da casa da vovó...")
                console.log("Progresso: " + posicao + "/" + objetivo)

                prompt("Pressione ENTER para continuar...")


                if (posicao == objetivo) {

                    console.log("🎉 Você encontrou a vovó!")
                    jogando = false

                }

            }

        } else {

            console.log("❌ Opção inválida")

        }

    }

} else {

    console.log("Saindo do jogo...")

}























