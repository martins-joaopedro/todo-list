import { useState } from "react"
import styled from "styled-components"
import { MdOutlineDone } from "react-icons/md";
import { IoTrashSharp  } from "react-icons/io5";
import { useDeleteData } from "../../hooks/useDeleteData";

export const List = ({ name, done, id }) => {

    const priorities = [
        { value: "adiável"}, 
        { value: "importante" }, 
        { value: "urgente" }, 
        { value: "atrasada" }
    ]

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
                <MdOutlineDone className="icon" />
             }
            </CheckboxContainer>
            <TaskName>{name}</TaskName>
            <Trash
                onClick={() => useDeleteData(id)} 
                className="trash">
                <IoTrashSharp className="icon" />
            </Trash>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10px;
    width: 90vw;
    max-width: 700px;
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

    .icon {
        font-size: 1.5rem;
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

const TaskName = styled.p`
    margin: 0 35px 0px 10px;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const Trash = styled.button`
    width: 35px;
    border-radius: 5px;
    aspect-ratio: 1;
    position: absolute;
    right: 10px;
    opacity: 0;
    border: none;
    transition: 0.2s ease-out;
    background: transparent;
`