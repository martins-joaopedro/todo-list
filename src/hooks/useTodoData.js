import axios from "axios"
const API_URL = "https://desafio-todolist.onrender.com"

export async function useTodoData() {
    const res = await axios.get(API_URL + "/todos")
    return res.data;
}