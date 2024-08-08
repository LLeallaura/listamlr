function adicionar() {
    const lista = document.querySelector ("ul")
    const input = document.querySelector("input")
    const nomeDigitado = input.value
    
    const tarefa = document.createElement("li")
    tarefa.innerText = nomeDigitado
    console.log(tarefa)
    lista.appendChild(tarefa)

    input.value = ""
    
}
