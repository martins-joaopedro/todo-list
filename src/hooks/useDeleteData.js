import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteData() {

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['getAllTodos'])
        }
    })

    return mutate;
}

const deleteData = (id) => {
    console.log(id)
    axios.delete("https://desafio-todolist.onrender.com/todos/" + id) 
    .then(() => {
        console.log("Apagado do banco")
    })
}


