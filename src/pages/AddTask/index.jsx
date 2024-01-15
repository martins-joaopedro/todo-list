import React from "react"
import { usePostTodoData } from "../../hooks/usePostTodoData"

export const AddTask = () => {
    return(
        <>
            <h1>Add Task</h1>
            <button onClick={() => usePostTodoData()}>AAAAAAAAAAA</button>
        </>
    )
} 