import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteData() {

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationKey: ['deleteTodo'],
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            console.log("Apagado do banco")
            queryClient.invalidateQueries(['getAllTodos'])
        }
    })

    return mutate;
}

const deleteData = async (id) => {
    await axios.delete("https://desafio-todolist.onrender.com/todos/" + id) 
}


