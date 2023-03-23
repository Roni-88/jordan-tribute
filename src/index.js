const botoesCarrossel = document.querySelectorAll ('.botao')
const imagens = document.querySelectorAll ('.imagem')

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function selecionarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa')
}

botoesCarrossel.forEach ((botao, indice, array) => {
    botao.addEventListener ('click', () => {
        desativarBotaoSelecionado()
        selecionarBotaoCarrossel(botao)
        esconderImagemAtiva()
        selecionarImagemDeFundo(indice)
    })
})
