import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../contexts/UserContext';

export default function LoginPage(){
    const {email, setEmail} = useContext(UserContext);

    return(
        <Container>
            <Logo>MyWallet</Logo>
            <Form>
                <Input placeholder='E-mail' type='email' name='email' ></Input>
                <Input placeholder='Senha' type='password' name='password' required></Input>
                <Button>Entrar</Button>
            </Form>
            <Link to='/cadastro'>
                <Title>Primeira vez? Cadastre-se!</Title>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Logo = styled.h1`
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    color: #ffffff;
    font-family: var(--font-title);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 24px;
`

const Input = styled.input`
    width: 90vw;
    height: 58px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #ffffff;
    font-size: 20px;
    color: #000000;
    padding: 15px;
    font-weight: 400;
    &::placeholder{
        color: #000000;
    }
    font-family: var(--font-body);
    margin-bottom: 13px;
`

const Button = styled.button`
    width: 90vw;
    height: 58px;
    background-color: var(--color-button);
    border: 1px solid var(--color-button);
    border-radius: 5px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    font-family: var(--font-body);
`

const Title = styled.h5`
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    font-family: var(--font-body);
    margin-top: 36px;
`
