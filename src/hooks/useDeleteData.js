import axios from "axios"

export const useDeleteData = (id) => {

    console.log(id)

    axios.delete("https://desafio-todolist.onrender.com/todos/" + id) 
        .then(() => console.log("Apagado do banco"))
}