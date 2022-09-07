import styled from 'styled-components';

export default function Incomes(){
    return(
        <Container>
            <Title>Nova entrada</Title>
            <Form>
                <Input placeholder='Valor'></Input>
                <Input placeholder='Descrição'></Input>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    )
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