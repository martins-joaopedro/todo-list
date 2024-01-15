import { useState } from "react"
import styled from "styled-components"

export const List = ({ name, done }) => {

    const [ isChecked, setIsChecked ] = useState(done)

    const toggleCheckBox = () => {
        setIsChecked(isChecked => !isChecked);
    }

    return(
        <Container checked={isChecked}>
            <CheckboxContainer 
                checked={isChecked}
                onClick={toggleCheckBox}
            >    
                { !!isChecked && 
                <CheckedIcon 
                    src="./src/assets/icon.png"
                /> }
            </CheckboxContainer>
            <TaskName>{name} aaaaaaaaaaaaaaaaaaaaaaaaaaaa</TaskName>
            <Trash className="trash"></Trash>
        </Container>
    )
}

const Container = styled.div`
    margin: 10px;
    background-color: ${props => props.checked ? "#66b3d1" : "#7c7c7c"};
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        .trash {
            opacity: 1;
        }
    }
`

const CheckboxContainer = styled.div`
    width: 30px;
    aspect-ratio: 1;
    border-radius: 8px;
    background-color: ${props => props.checked ? "#dadada" : "#5c5c5c"};
    display: flex;
    align-items: center;
    justify-content: center;
`

const CheckedIcon = styled.img`
    width: 100%;
    filter: saturate(12) brightness(-3);
    
`

const TaskName = styled.p`
    margin: 0 35px 0px 10px;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const Trash = styled.button`
    width: 35px;
    border-radius: 50%;
    aspect-ratio: 1;
    background-color: red;
    position: absolute;
    right: 10px;
    opacity: 0;
    border: none;
    transition: 0.2s ease-out;
`