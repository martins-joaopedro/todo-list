import { api } from "../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const usePostTodoData = () => {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationKey: ['postTodo'],
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries(['getAllTodos'])
        }
    })

    return {
        mutate,
        ...mutate
    }
}

const postData = (todo) => {
    let concluido = false;
    const { name: nome, description: descricao, priorityId: prioridade } = todo;
    try {
        api.post("https://desafio-todolist.onrender.com/todos", {
            nome,
            descricao,
            concluido,
            prioridade
        }).then((r) => console.log(r))
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Adicionado ao banco")
    }
}