let conta = 0 
let pessoas = 0
let porcentagem = 0

const contaInput = document. querySelector ("#conta") 
contaInput.addEventListener ("input", receberValorConta)

function receberValorConta (evento) { 
 
conta = Number(evento. target.value)
calcular()

}


const pessoasInput = document. querySelector ("#pessoas") 
.addEventListener ("input", receberQuantidadePessoas)


function receberQuantidadePessoas (evento) {
    const paragrafoErro = document. querySelector("-pessoas #erro") 
const divErro = document. querySelector("-pessoas .input-box")

if (evento.target.value === "0") {
    paragrafoErro.style.display = "block"
    divErro.Erro.setAttribute("id", "erro-div")
} else {
    paragrafoErro.style.display = "none"
    divErro.Erro.setAttribute("id", "")
    pessoas = Number(evento.target.value)
}
calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type= 'button'")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagemBotao() {
    

botao.classList.remove("botao-ativo")


      botoesGorjeta.forEach(botao=> {
        if(botao.ative === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
      })

      if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
      } else {
        porcentagem = 0
      }


      
      calcular()

}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML =  conta * porcentagem / pessoas 
        strongTotal.innerHTML = (conta + (conta *porcentagem)) / pessoas
    }
}


const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    contaInput.value = ""

    botaoGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

    let conta = 0 
    let pessoas = 0
    let porcentagem = 0
    
}