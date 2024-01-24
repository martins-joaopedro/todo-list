import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export function useTodoData() {
    
    const query = useQuery({
        queryKey: ['getAllTodos'],
        queryFn: fetchData,
    })

    return {
        ...query,
        data: query.data
    }
}

const fetchData = async () => {
    const res = await api.get("/todos")
    return res?.data;
}
