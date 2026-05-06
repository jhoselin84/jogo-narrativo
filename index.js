/**
 * jogo da floresta 
 */

const prompt = require("prompt-sync")()


let nomeJogador
let quantidadePocoes = 0
let jogando = true
let loboApareceu = false

nomeJogador = prompt("Digite seu nome: ")
console.log("Bem-vindo, " + nomeJogador)

console.log("1 - Jogar")
console.log("2 - Sair")

let opcao = prompt("Escolha uma opção: ")
console.log("==================")

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
        console.log("🌲 Você está mais perto da casa da vovó...")
        prompt("Pressione ENTER para continuar...")
    }

} else {
    console.log("Opção inválida")
    let caminho = prompt("Escolha um caminho: ")

}
