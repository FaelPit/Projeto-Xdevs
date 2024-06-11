// - Passo 1 - dar um jeito de pegar o elemento html da seta avancar 
const btnAvancar = document.getElementById('btn-avancar')
let cartaoAtual = 0;
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll(".cartao");
//- passo 2- dar um jeito de indentificar o clique do usuário na seta avançar 
btnAvancar.addEventListener('click', function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;
    // passo 4 - buscar o cartão que esta sendo selecionado e esconder
    esconderCartoesSelecionado();
    // - passo 3 - fazer aparecer o proximo cartao da lista colocando a classe selecionado nele

    cartaoAtual++;

    mostrarCartao();


});
//OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista 
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar

//passo 2 - dar um jeito de de pegar o elemento html da seta voltar
btnVoltar.addEventListener('click', function () {
    const ehPrimeiroCartao = cartaoAtual === 0
    if (ehPrimeiroCartao)return;
    //- passo 4 - buscar o cartão que esta selecionado e esconder
   esconderCartoesSelecionado()
    //passo 3 - fazer aparecer o cartão anterior da lista 
    cartaoAtual--;
    mostrarCartao();


});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado");
}

