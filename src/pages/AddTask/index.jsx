
import styled from "styled-components"
import { usePostTodoData } from "../../hooks/usePostTodoData"
import { useState } from "react"
import { STYLES } from "../../../global"
const { PRIORITIES } = STYLES;

export const AddTask = () => {

    const [checked, setChecked] = useState(-1)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    
    const priorities = [
        { value: "adiável"}, 
        { value: "importante" }, 
        { value: "urgente" }, 
        { value: "atrasada" }
    ]

    return(
        <Container>
             <FormsContainer>
                <Title 
                    size={"1.5rem"}
                    bold={"bold"}>
                    Adicionar Tarefa
                </Title>
                
                <Input 
                    placeholder="informe um nome"
                    onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input 
                    placeholder="adicione uma descrição"
                    onChange={(e) => setDescription(e.target.value)}
                ></Input>

                <Title 
                    size={"1.2rem"}>
                    informe uma prioridade
                </Title>

                <PriorityContainer>
                    {
                        priorities.map(({ value }, i) => 
                        <Priority 
                            onClick={()=> setChecked(i)}
                            className={checked == i ? "check": ""}
                            color={PRIORITIES[i]}
                            key={i}>
                                <Priority.Value className="name">{value}</Priority.Value>
                        </Priority>)
                    }
                </PriorityContainer>

            <Submit onClick={() => usePostTodoData(name, description, checked)}>Adicionar</Submit>
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
    font-size: 1rem;

    &:hover {
        margin-left: 8px;
    }
    
`

const Title = styled.p`
    font-size: ${props => props.size};
    font-weight: ${props => props.bold || ""};
    margin-top: 15px;
`

const FormsContainer = styled.div`
    background: linear-gradient(-45deg, #abc3e2, #99bacf);
    padding: 15px;
    width: 75%;
    min-height: 500px;
    border-radius: 15px;
    justify-content: center;
    width: 90vw;
    max-width: 700px;
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

const PriorityContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
`

const Priority = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 20px;
    width: 10%;
    border-radius: 15px;
    background-color: ${props => props.color};
    transition: 0.2s all ease-out;
    text-overflow: ellipsis;
    overflow: hidden;
    
    &:hover {
        filter: brightness(1);
        padding-left: 8px;
        padding-right: 8px;
        width: 25%;
        
        .name {
            display: block;
        }
    };

    &.check {
        width: 25%;
        filter: none;
        background-color: #303030;

        .name {
            display: block;
        }
    }
    `

Priority.Value = styled.p`
    font-weight: bold;
    color: #f1f1f1;
    font-size: 0.8rem;
    display: none;
    
`