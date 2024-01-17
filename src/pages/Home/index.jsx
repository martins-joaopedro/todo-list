import styled from "styled-components"
import { List } from "../../components/List/index.jsx"
import { useTodoData } from "../../hooks/useTodoData.js"
import { useEffect, useState } from "react"

export const Home = () => {

    const [ data, setData ] = useState([])
    
    const getData = async () => {
        let d = await useTodoData();
        console.log("A", data)
        setData(d)
    }

    useEffect(() => {
       getData()
    },[])


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
                {!data.length && <div>carregando...</div>

                }
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
