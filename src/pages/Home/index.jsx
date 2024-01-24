import styled from "styled-components"
import { List } from "../../components/List/index.jsx"
import { useTodoData } from "../../hooks/useTodoData.js"
import { Modal } from "../../components/Modal/index.jsx"
import { useState } from "react"
import { Form } from "../../components/Form/index.jsx"

export const Home = () => {
    
    const { data, status, isError, isFetching } = useTodoData();
    const [isOpen, setIsOpen] = useState(false)

    const Error = () => {
        return(
            <>erro</>
        )
    }

    const toggleModal = () => {
        setIsOpen(isOpen => !isOpen);
    }

    return(
        <Container>
            <Modal isopen={isOpen}>
                <Form toggleModal={toggleModal}/>
            </Modal>
            <Section>
                <h1>Suas tarefas: </h1>
                { !data?.length && status === "success" && <div>nenhuma tarefa encontrada </div> }
                <AddTaskButton
                    onClick={() => toggleModal()}
                    >
                    Adicionar nova tarefa
                </AddTaskButton>
            </Section>
            <Section>
                { isFetching && <div>carregando...</div> }
                { isError && <Error></Error> }
                {
                    !isFetching && 
                    <ListContainer>
                        {status === "success" && data?.map(todo => <List 
                            key={todo.id} 
                            todo={todo}
                            ></List>
                        )}
                    </ListContainer>
                }
            </Section>
        </Container>
    )
} 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Section = styled.section`
    width: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    position: relative;
`

const AddTaskButton = styled.button`
    width: 50%;
    background-color: #303030;
    color: #e5e5e5;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    transition: 0.2s all;
    position: absolute;
    bottom: 5px;
    &:hover {
        background-color: #666666;
    }
`

const ListContainer = styled.div`
    
`


    