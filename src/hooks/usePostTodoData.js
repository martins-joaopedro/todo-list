import { api } from "../services/api";

export const usePostTodoData = (nome, descricao, prioridade) => {
    let concluido = false;

    api.post("https://desafio-todolist.onrender.com/todos", {
        nome,
        descricao,
        concluido,
        prioridade
    }).then(() => console.log("Adicionado ao banco"))
}