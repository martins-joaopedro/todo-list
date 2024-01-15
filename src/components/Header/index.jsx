import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {
    return(
        <Container> 
            
            <Link 
                to="/home"
                style={{ textDecoration: "none" }} >
               <Button>Home</Button>
            </Link>

            <Link 
                to="/add"
                style={{ textDecoration: "none" }} >
               <Button>Nova Tarefa</Button>
            </Link>
            
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #97d9ff;
    text-decoration: none;
`

const Button = styled.div`
    background-color: #68bdee;
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    transition: 0.2s all;

    &:hover {
        background-color: #60acd8;
        padding: 12px;
    }
`