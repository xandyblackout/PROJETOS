const setaEsquerda = document.getElementById("seta-esquerda")
const setaDireita = document.getElementById("seta-direita")
const slideAtivo = document.querySelectorAll(".slide-ativo")
const imagens = document.querySelectorAll(".imagem")
let posicaoDoIndice = 0

setaEsquerda.style.opacity = "0.5"
setaEsquerda.style.cursor = "default"

function ativarSetaDireita () {

    if (posicaoDoIndice === imagens.length - 1) {
        return
    }

    function alterarOpacidade (ultimoSlide) {
        if (ultimoSlide === imagens.length - 1) {
            setaDireita.style.opacity = "0.5"
            setaDireita.style.cursor = "default"
            return
        }
    }

    posicaoDoIndice++

    imagens.forEach((imagem)=> {
        imagem.classList.remove('slide-ativo')
    })

    imagens[posicaoDoIndice].classList.add('slide-ativo')
    
    if (posicaoDoIndice > 0){
        setaEsquerda.style.opacity = "1"
        setaEsquerda.style.cursor = "pointer"
    }

    alterarOpacidade(posicaoDoIndice)
}

function ativarSetaEsquerda () {
    if (posicaoDoIndice === 0) {
        return
    }

    function alterarOpacidade () {
        if (posicaoDoIndice === 0) {
            setaEsquerda.style.opacity = "0.5"
            setaEsquerda.style.cursor = "default"
            return
        } else if (posicaoDoIndice === imagens.length - 2) {
            setaDireita.style.opacity = "1"
            setaDireita.style.cursor = "pointer"
        }
    }
    
    posicaoDoIndice--

    imagens.forEach((imagem) => {
        imagem.classList.remove("slide-ativo")
    })
    
    imagens[posicaoDoIndice].classList.add("slide-ativo")

    alterarOpacidade()
}

setaDireita.addEventListener('click', ativarSetaDireita)

setaEsquerda.addEventListener('click', ativarSetaEsquerda)