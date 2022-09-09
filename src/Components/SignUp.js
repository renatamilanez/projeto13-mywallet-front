import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function SignUp(){
    const {email, setEmail, password, setPassword, name, setName, repeatPassword, setRepeatPassword} = useContext(UserContext);
    const navigate = useNavigate();
    const signData = {
        name,
        email,
        password,
        repeatPassword
    }

    function handleForm(e){
        e.preventDefault();
        const promise = axios.post('http://localhost:4000/sign-up', signData);
        promise.then(res => {
            navigate('/');
            setName('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');
        });
        promise.catch(res => {
            alert('Faça o cadastro novamente');
        });
    }

    return(
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={handleForm}>
                <Input placeholder='Nome' type='text' name='name' required onChange={(e) => setName(e.target.value)} value={name}></Input>
                <Input placeholder='Email' type='email' name='email' required onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Input placeholder='Senha' type='password' name='password' required onChange={(e) => setPassword(e.target.value)} value={password}></Input>
                <Input placeholder='Confirme a senha' type='password' name='password' required onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword}></Input>
                <Button>Cadastrar</Button>
            </Form>
            <Link to='/'>
                <Title>Já tem uma conta? Entre agora!</Title>
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