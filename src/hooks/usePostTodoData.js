import axios from "axios"

export const usePostTodoData = (nome, descricao, prioridade) => {

    console.log(nome, descricao, prioridade)
    let concluido = false;

    axios.post("https://desafio-todolist.onrender.com/todos", {
        nome,
        descricao,
        concluido,
        prioridade
    }).then(() => console.log("Adicionado ao banco"))
}