
import styled from "styled-components"
import { usePostTodoData } from "../../hooks/usePostTodoData"
import { useState } from "react"
import { STYLES } from "../../../global"
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const { COLORS, PRIORITIES } = STYLES;

export const AddTask = () => {

    const [priorityId, setPriorityId] = useState(-1)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    
    const { mutate: postData, status } = usePostTodoData();
    const navigator = useNavigate();

    status == "success" ? navigator("/") : {}

    const priorities = [
        { value: "adiável"}, 
        { value: "importante" }, 
        { value: "urgente" }, 
        { value: "atrasada" }
    ]

    return(
        <Container>
            <FormsContainer>
                <FormsContainer.Icon
                    onClick={() => navigator("/")}
                >
                    <IoClose className="icon"/>
                </FormsContainer.Icon>

                <FormsContainer.Box className="input">
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
                </FormsContainer.Box>

                <FormsContainer.Box>
                    <Title 
                        size={"1.2rem"}>
                        informe uma prioridade
                    </Title>

                    <PriorityContainer>
                        {
                            priorities.map(({ value }, i) => 
                            <Priority 
                                onClick={()=> setPriorityId(i)}
                                className={priorityId == i ? "check": ""}
                                color={PRIORITIES[i]}
                                key={i}>
                                    <Priority.Value className="name">{value}</Priority.Value>
                            </Priority>)
                        }
                    </PriorityContainer>
                </FormsContainer.Box>


                <Submit onClick={() =>  {
                    postData({name, description, priorityId})
                    }}>
                    Adicionar
                </Submit>
            </FormsContainer>
        </Container>
    )
} 

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const FormsContainer = styled.div`
    //background: linear-gradient(-45deg, ${COLORS.MAIN}, ${COLORS.SECONDARY});
    background-color: #949494;
    padding: 20px;
    width: 85%;
    max-width: 540px;
    min-height: 500px;
    border-radius: 15px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    
`

FormsContainer.Box = styled.div`
    width: 100%;

    &.input {
        display: flex;
        flex-direction: column;
    }
`

FormsContainer.Icon = styled.button`
    position: absolute;
    top: 0px;
    right: 0;
    width: 40px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    .icon {
        width: 100%;
        font-size: 30px;
        
    }
`

const Input = styled.input.attrs({ type: 'text' })`
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
    margin-top: 25px;
    color: ${COLORS.MAIN_DARK};
`

const Submit = styled.button`
    width: 90%;
    height: 60px;
    border-radius: 5px;
    border: none;
    margin-top: 25px;
    transition: 1s all;
    background: linear-gradient(75deg, #dddddd, #99bacf, #202020);
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
    margin-top: 20px;
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
    color: #e6e6e6;
    font-size: 0.8rem;
    display: none;
`