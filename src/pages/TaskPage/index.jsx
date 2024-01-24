import { useParams } from "react-router-dom";
import styled from "styled-components"
import { useGetOneTodo } from "../../hooks/useGetOneTodo";

export const TaskPage = () => {

    const { id } = useParams();
    const { data } = useGetOneTodo(id)
    return(
        <div>
           { !!data && <div> {data.name} </div> }
        </div>
    )
}