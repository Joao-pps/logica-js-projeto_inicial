let mensagem = document.querySelector(".container__texto-azul"); // Vai pegar o elemento <span> do HTML
const limite = 10; // Número limite para escolhas
let tentativas = 3;

function geradorNumeroAleatorio() { // Função responsável por gerar número aleatório
    return parseInt(Math.random() * limite); // Retornando o número aleatório
}

let numeroSecreto = geradorNumeroAleatorio(); // Salvando o retorno da função em uma variável
console.log(numeroSecreto); // Imprime o valor do meu número aleatório

while(tentativas >= 0) {
    let numeroEscolhido = parseInt(window.prompt(`Digite um número de 0 a 10, você tem ${tentativas}`)); // Vai pegar o número do usuário

    // Condição que vai analisar se meu número escolhido é menor ou igual ao limite estipulado
    // e se o tipo de dados das duas variáveis é similar.
    if (numeroEscolhido <= limite && typeof numeroEscolhido === typeof numeroSecreto) {
        // Condição que vai analisar se o número que o usuário escolheu é igual ao número secreto
        if (numeroEscolhido === numeroSecreto) {
            // A resposta, caso for verdadeira, será a adição do texto "Acertou!" na minha tag <span>.
            mensagem.textContent = "Acertou!";
            break
        } else {
            // A resposta, caso for falsa, será a adição do texto "Errou!" na minha tag <span>.
            mensagem.textContent = "Errou!";
        }
    } else {
        // Retorna caso o número que o usuário escolheu seja maior que o limite ou que seja de outro tipo de dado.
        alert("Coloque apenas números e não exceda o limite");
    }
    --tentativas
}
