
import styled from "styled-components"
import { usePostTodoData } from "../../hooks/usePostTodoData"
import { useState } from "react"

export const AddTask = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    return(
        <Container>
             <FormsContainer>
                <h1>Adicionar Tarefa</h1>

                <Input 
                    placeholder="informe um nome"
                    onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input 
                    placeholder="adicione uma descrição"
                    onChange={(e) => setDescription(e.target.value)}
                ></Input>

                <h3>informe uma prioridade</h3>


            <Submit onClick={() => usePostTodoData(name, description)}>Adicionar</Submit>
            </FormsContainer>
        </Container>
    )
} 

const Container = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
`

const Input = styled.input.attrs({ type: 'text' })`
    width: 75%;
    border: none;
    border-radius: 15px;
    height: 35px;
    margin-top: 12px;
    padding: 5px;
    padding-left: 15px;
    outline: none;
    transition: 0.6s all;
    
    &:hover {
        margin-left: 8px;
    }
    
`

const FormsContainer = styled.div`
    border: solid #99bacf;
    background: linear-gradient(-45deg, #abc3e2, #99bacf);
    padding: 15px;
    width: 75%;
    border-radius: 15px;
    
    justify-content: center;
`

const Submit = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    border: none;
    margin-top: 25px;
    transition: 1s all;
    background: linear-gradient(75deg, #dddddd, #99bacf, #237381);
    background-size: 500%;

    &:hover {
        background-position: 100%;
        letter-spacing: 2px;
        font-weight: bold;
        color: #e5e5e5;
    }

`