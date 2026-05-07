/**
 * jogo da floresta 
 */



const prompt = require("prompt-sync")()
require("colors")




console.clear()

console.log("╔══════════════════════════════════════════════╗".green)
console.log("║                                              ║".green)
console.log("║     🌲 BEM-VINDO À FLORESTA SOMBRIA 🌲      ║".green)
console.log("║                                              ║".green)
console.log("╚══════════════════════════════════════════════╝".green)

console.log("")
console.log("📖 História:".magenta)

console.log("")
console.log("Chapeuzinho Vermelho precisa atravessar")
console.log("a floresta para encontrar sua vovó.")
console.log("")
console.log("Mas cuidado...".red)
console.log("🐺 O lobo pode aparecer a qualquer momento!")
console.log("")
console.log("❓ Durante a jornada, você encontrará")
console.log("charadas misteriosas.")
console.log("")
console.log("🧪 Algumas vezes você poderá encontrar")
console.log("poções mágicas para sobreviver.")
console.log("")
console.log("🎯 Seu objetivo é ajudar Chapeuzinho")
console.log("a encontrar sua vovó e sair viva da floresta!")
console.log("")

console.log("========================================")

prompt("Pressione ENTER para começar...")








// VARIÁVEIS



let nomeJogador


let jogando = true



let posicao = 0
let objetivo = 5
let quantidadePocoes = 1


let inventario = ["🧪 Poção"]



function mostrarMenu() {

    console.log("====================================")
    

    console.log("1 - Jogar".green)
    console.log("2 - Inventário".cyan)
    console.log("3 - Sair".red)

}



function mostrarInventario() {

    console.log("====================================".cyan)
    console.log("🎒 INVENTÁRIO".cyan)
    console.log("====================================".cyan)

    
    for (let i = 0; i < inventario.length; i++) {

        console.log((i + 1) + " - " + inventario[i])

    }

    console.log("====================================".cyan)

}



function mostrarStatus() {

    console.log("")
    console.log(("📍 Progresso: " + posicao + "/" + objetivo).cyan)
    console.log(("🧪 Poções: " + quantidadePocoes).green)

}


// CHARADAS

function fazerPergunta() {

    let pergunta = Math.floor(Math.random() * 4)

    let resposta

    switch (pergunta) {

        // CHARADA 1
        case 0:

            console.log("====================================")
            console.log("📖 CHARADA DA FLORESTA".magenta)
            console.log("====================================")

            console.log("Na versão original de Charles Perrault,")
            console.log("qual é o destino da Chapeuzinho no final?")
            console.log("")

            console.log("1 - Ela é salva por um caçador")
            console.log("2 - Ela e a avó são devoradas pelo lobo")
            console.log("3 - Ela foge sozinha")

            console.log("====================================")

            resposta = prompt("👉 Resposta: ")

            return resposta == "2"

        // CHARADA 2
        case 1:

            console.log("====================================")
            console.log("📖 CHARADA DA FLORESTA".magenta)
            console.log("====================================")

            console.log("Na versão dos Irmãos Grimm,")
            console.log("o que o lobo faz para enganar a Chapeuzinho?")
            console.log("")

            console.log("1 - Se disfarça de caçador")
            console.log("2 - Finge ser a vovó")
            console.log("3 - Se esconde na floresta")

            console.log("====================================")

            resposta = prompt("👉 Resposta: ")

            return resposta == "2"

        // CHARADA 3
        case 2:

            console.log("====================================")
            console.log("📖 CHARADA DA FLORESTA".magenta)
            console.log("====================================")

            console.log("Qual é a principal lição da história?")
            console.log("")

            console.log("1 - Não confiar em estranhos")
            console.log("2 - Comer doces")
            console.log("3 - Dormir cedo")

            console.log("====================================")

            resposta = prompt("👉 Resposta: ")

            return resposta == "1"

        // CHARADA 4
        case 3:

            console.log("====================================")
            console.log("📖 CHARADA DA FLORESTA".magenta)
            console.log("====================================")

            console.log("Quem salva a vovó na versão dos Grimm?")
            console.log("")

            console.log("1 - O lenhador")
            console.log("2 - O caçador")
            console.log("3 - A Chapeuzinho")

            console.log("====================================")

            resposta = prompt("👉 Resposta: ")

            return resposta == "2"

    }

}


// INÍCIO 


nomeJogador = prompt("Digite seu nome: ".green)

console.clear()

console.log(("Bem-vindo, " + nomeJogador + "!"))

// DO WHILE
do {

    mostrarMenu()

    let opcao = prompt("Escolha uma opção: ")

    switch (opcao) {

        

       

        case "1":

            while (jogando) {

                console.log("")
                console.log("🌲 Escolha um caminho:")
                console.log("1 - Direita")
                console.log("2 - Centro")
                console.log("3 - Esquerda")

                let caminho = prompt("👉 Caminho: ")

               
                if (caminho == "1" || caminho == "2" || caminho == "3") {

                   
                    let evento = Math.floor(Math.random() * 4)

                    
                   
                    
                    if (evento == 0) {

                        console.log("")
                        console.log("🐺 O lobo apareceu!".red)

                        if (quantidadePocoes > 0) {

                            console.log("🧪 Sua poção salvou você!".green)

                            quantidadePocoes--

                            inventario.pop()

                        } else {

                            console.log("💀 Você não tinha poção!".red)
                            console.log("GAME OVER".red)

                            jogando = false

                        }

                    }

                    
                    // CHARADA
                    

                    else if (evento == 1) {

                        let acertou = fazerPergunta()

                        if (acertou) {

                            console.log("")
                            console.log("✔️ RESPOSTA CORRETA!".green)
                            console.log("🌲 Você avançou na floresta!")

                            posicao++

                        } else {

                            console.log("")
                            console.log("❌ RESPOSTA ERRADA!".red)
                            console.log("↩️ Você voltou um passo!")

                            posicao--

                        }

                    
                        if (posicao < 0) {

                            posicao = 0

                        }

                        // GAME OVER
                        if (posicao == 0 && !acertou) {

                            console.log("")
                            console.log("💀 Você se perdeu na floresta...")
                            console.log("GAME OVER".red)

                            jogando = false

                        }

                    }

                    
                    else {

                        console.log("")
                        console.log("🧪 Você encontrou uma poção mágica!".green)

                        quantidadePocoes++

                        inventario.push("🧪 Poção")

                    }

                    
                    mostrarStatus()

                    
                    if (posicao >= objetivo) {

                        console.log("")
                        console.log("🎉 Você encontrou a vovó!".yellow)
                        

                        jogando = false

                    }

                } else {

                    console.log("❌ Caminho inválido!".red)

                }

                if (jogando) {

                    prompt("\nPressione ENTER para continuar...")

                    console.clear()

                }

            }

            break

        

        case "2":

            mostrarInventario()

            prompt("\nPressione ENTER para voltar...")

            console.clear()

            break

        
        case "3":

            console.log("👋 Saindo do jogo...".yellow)

            jogando = false

            break

        

        default:

            console.log("❌ Opção inválida!".red)

    }

} while (jogando)

















