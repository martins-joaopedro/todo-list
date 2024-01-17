import styled from "styled-components"
import { List } from "../../components/List/index.jsx"
import { useTodoData } from "../../hooks/useTodoData.js"

export const Home = () => {

    let { data, status } = useTodoData();

    return(
        <Container>
            <h1>Suas tarefas: </h1>
            <>
                {data?.map(todo => <List 
                    key={todo.id} 
                    id={todo.id}
                    name={todo.nome}
                    done={todo.concluido}
                    ></List>
                )}
                {!data?.length && status === "loading" && <div>carregando...</div> }
                {!data?.length && status === "success" && <div>nenhuma tarefa encontrada </div> }
            </>
        </Container>
    )
} 

const Container = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
