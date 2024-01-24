import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

const fetchData = async (id) => {
    const res = await api.get(`/todos/${id}`)
    return res.data;
}

export const useGetOneTodo = (id) => {
    const query = useQuery({
        queryKey: ['getOneTodo', id],
        queryFn: ({ queryKey }) => fetchData(queryKey[1]),
        retry: 2,
    })

    return {
        ...query,
        data: query.data
    }
}