import styled from "styled-components"
import { List } from "../../components/List/index.jsx"
import { useTodoData } from "../../hooks/useTodoData.js"
import { useNavigate } from "react-router-dom"

const Reloading = () => <div>recarregando...</div>

export const Home = () => {
    
    const navigate = useNavigate();
    const { data, status, isRefetching} = useTodoData();

    return(
        <Container>
            <h1>Suas tarefas: </h1>
            { isRefetching && <Reloading />}
            { !data?.length && status === "loading" && <div>carregando...</div> }
            { !data?.length && status === "success" && <div>nenhuma tarefa encontrada </div> }
            <ListContainer>
                {status === "success" && data?.map(todo => <List 
                    key={todo.id} 
                    id={todo.id}
                    name={todo.nome}
                    done={todo.concluido}
                    ></List>
                )}
            </ListContainer>
            <AddTaskButton
                onClick={() => navigate("/add")}
            >
                Adicionar nova tarefa
            </AddTaskButton>
        </Container>
    )
} 

const Container = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddTaskButton = styled.button`
    position: absolute;
    top: 100px;
    width: 50%;
    background-color: #303030;
    color: #e5e5e5;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    transition: 0.2s all;
    &:hover {
        background-color: #666666;
    }
`

const ListContainer = styled.div`
    position: absolute;
    top: 150px;
`