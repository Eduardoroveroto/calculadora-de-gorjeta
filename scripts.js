let conta = 0 
let pessoas = 0

const contaInput = document. querySelector ("#conta") 
contaInput.addEventListener ("input", receberValorConta)

function receberValorConta (evento) { 
 
conta = Number(evento. target.value)

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
}
