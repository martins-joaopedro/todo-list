import styled from "styled-components"

export const Modal = ({ isopen, children }) => {
    return(
        <Container $isopen={isopen}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #383838a9;
    backdrop-filter: blur(3px);
    z-index: 9;
    opacity: ${props => props.$isopen == true ? "1": "0"};
    pointer-events: ${props => props.$isopen == true ? "all": "none"};
    transition: 0.5s all;
`

