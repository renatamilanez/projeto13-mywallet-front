import styled from 'styled-components';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {IoRemoveCircleOutline} from 'react-icons/io5';
import {IoExitOutline} from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import {useContext, useEffect} from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import Record from "../Components/Record.js"

export default function Records(){
    const {name, config, records, setRecords, username} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get('http://localhost:5000/records', config);
        promise.then(res => {
            setRecords(res.data);
        });
        promise.catch(res => {
            navigate('/');
            alert('Você foi desconectado, faça o login novamente');
        })
    }, []);

    function returnHome(){
        localStorage.removeItem('userToken');
        navigate('/');
    }

    return(
        <Container>
            <Welcome>
                <Hello>Olá, {username}</Hello>            
                    <Icons>
                        <IoExitOutline onClick={returnHome}/>
                    </Icons>
            </Welcome>
                {records === null || records.length === 0 ? (
                    <Register>
                        <Text>Não há registros de<br/>entrada ou saída</Text>
                    </Register>
                ) : (
                        <Record />
            )}
            <Buttons>
                <Button>
                    <Link to='/entrada'>
                        <Icons>
                            <IoIosAddCircleOutline/>
                        </Icons>
                    </Link>
                    <h6>Nova<br/>entrada</h6>
                </Button>
                <Button>
                    <Link to='/saida'>
                        <Icons>
                            <IoRemoveCircleOutline/>
                        </Icons>
                    </Link>
                    <h6>Nova<br/>saída</h6>
                </Button>
            </Buttons>
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
    height: calc(100vh - 250px);
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

const Icons = styled.div`
    color: #ffffff;
    font-size: 28px;
`

const Buttons = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
