import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PrivatePage({children}){
    const auth = localStorage.getItem('userToken');

    if(auth){
        return(
            <>
                {children}
            </>
        );
    } else {
        return (
            <Container>
                    <Title>Acesso negado, faça login novamente.</Title>
                    <Link to='/'>
                            <Button>Voltar para página de login</Button>
                    </Link>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Title = styled.h2`
    font-family: var(--font-body);
    color: #ffffff;
    font-weight: 400;
    font-size: 23px;
    text-align: center;
`

const Button = styled.button`
    width: 80vw;
    height: 45px;
    background-color: #ffffff;
    color: var(--color-button);
    border-radius: 5px;
    border: 1px solid #ffffff;
    font-size: 20px;
    font-weight: 400;
    margin-top: 25px;
`