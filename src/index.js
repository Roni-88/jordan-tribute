const botoesCarrossel = document.querySelectorAll ('.botao')

botoesCarrossel.forEach ((botao) => {
    botao.addEventListener ('click', () => {
        const botaoSelecionado = document.querySelector ('.selecionado')
        botaoSelecionado.classList.remove ('selecionado')
        botao.classList.add ('selecionado')
    })
})

const imagensCarrossel = document.querySelectorAll ('.imagem')

imagensCarrossel.forEach ((imagem) => {
    imagem.addEventListener ('click', () => {
        const imagemAtiva = document.querySelector ('.ativa')
        imagemAtiva.classList.remove ('ativa')
        imagem.classList.add ('ativa')
    })
})
