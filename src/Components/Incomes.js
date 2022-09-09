import styled from 'styled-components';
import {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function Incomes(){
    const {amount, setAmount, description, setDescription, config } = useContext(UserContext);
    const navigate = useNavigate();
    
    async function handleForm(e){
        e.preventDefault();
        const newIncome = {
            value: amount,
            description,
            type: "positive"
        }

        try {
            await axios.post('http://localhost:4000/records', newIncome, config);
            console.log('enviou para api');
            navigate('/registros');
            setAmount('');
            setDescription('');
        } catch (error) {
            console.log(error);
            alert('Favor preencher corretamente');
        }
    }

    return(
        <Container>
            <Title>Nova entrada</Title>
            <Form onSubmit={handleForm}>
                <Input placeholder='Valor' type='number' required onChange={(e) => {setAmount(e.target.value)}} value={amount}></Input>
                <Input placeholder='Descrição' type='text' required onChange={(e) => setDescription(e.target.value)} value={description}></Input>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
`

const Title = styled.h3`
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    font-family: var(--font-body);
    margin-top: 25px;
    margin-left: 24px;
    margin-bottom: 40px;
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