import axios from "axios"

export const usePostTodoData = (nome, descricao) => {

    let concluido = true;
    let prioridade = 1;

    axios.post("https://desafio-todolist.onrender.com/todos", {
        nome,
        descricao,
        concluido,
        prioridade
    }).then(() => console.log("Adicionado ao banco"))
}