import styled from 'styled-components';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {IoRemoveCircleOutline} from 'react-icons/io5';
import {IoExitOutline} from 'react-icons/io5';

export default function Home(){
    return(
        <Container>
            <Welcome>
                <Hello>Olá, fulano</Hello>
                <Symbols>
                    <IoExitOutline />
                </Symbols>
            </Welcome>
            <Register>
                <Text>Não há registros de<br/>entrada ou saída</Text>
            </Register>
            <Buttons>
                <Button>
                    <Symbols>
                        <IoIosAddCircleOutline/>
                    </Symbols>
                    <h6>Nova<br/>entrada</h6>
                </Button>
                <Button>
                    <Symbols>
                        <IoRemoveCircleOutline/>
                    </Symbols>
                    <h6>Nova<br/>saída</h6>
                </Button>
            </Buttons>
        </Container>
    )
}

//<Register>
//<Text>Não há registros de<br/>entrada ou saída</Text>
//</Register>

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Welcome = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`

const Hello = styled.h3`
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    font-family: var(--font-body);
`

const Register = styled.div`
    width: 90vw;
    height: calc(100% - 250px);
    background-color: #ffffff;
    color: #868686;
    font-size: 20px;
    font-weight: 400;
    font-family: var(--font-body);
    border-radius: 5px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
`

const Text = styled.h6`
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    font-family: var(--font-body);
    text-align: center;
    line-height: 23.5px;
`

const Button = styled.div`
    width: 49%;
    height: 114px;
    background-color: var(--color-button);
    color: #ffffff;
    font-size: 17px;
    font-family: var(--font-body);
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid var(--color-button);
`

const Symbols = styled.div`
    color: #ffffff;
    font-size: 28px;
`

const Buttons = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
