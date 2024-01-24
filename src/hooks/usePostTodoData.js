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

const postData = async (todo) => {
    let done = false;
    const { name, description, priorityId } = todo;
    await api.post("https://desafio-todolist.onrender.com/todos", {
        name,
        description,
        priorityId, 
        done
    })
}
