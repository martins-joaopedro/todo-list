import axios from "axios"

export const usePostTodoData = () => {

    axios.post("https://desafio-todolist.onrender.com/todos", {
        descricao: "aaa",
        concluido: true,
        nome: "desc2",
        prioridade: 1
    })
}