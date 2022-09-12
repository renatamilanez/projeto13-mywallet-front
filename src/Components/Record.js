import styled from "styled-components";
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Record(){
    const {records, setRecords, config} = useContext(UserContext);
    const navigate = useNavigate();
    let balance = 0;

    records.forEach(record => {
        if(record.type === 'positive'){
            balance = parseInt(balance) + parseInt(record.value);
            balance = balance.toFixed(2);
        } if (record.type === 'negative'){
            balance = parseInt(balance) - parseInt(record.value)
            balance = balance.toFixed(2);
        }
    });

    async function deleteRecord(record){
        if(window.confirm('Deseja deletar o item?')){
            try {
                await axios.delete(`http://localhost:5000/delete/${record._id}`)
                const promise = axios.get('http://localhost:5000/records', config);
                promise.then(res => {
                setRecords(res.data);
        });
            } catch (error) {
                navigate('/');
                alert('Você foi desconectado, faça o login novamente');
            }
        }
    }

    return(
        <Register>
            <Records>
                {records.map((record, index) => (
                    <Item index={index}>
                        <Date>{record.date}</Date>
                        <AlignItem>
                            <Description>{record.description}</Description>
                            <Value type={record.type}>{parseInt(record.value).toFixed(2)}</Value>
                        </AlignItem>
                        <Delete onClick={() => deleteRecord(record)}>x</Delete>
                    </Item>
                ))}
            </Records>
                <Overall>
                    <h6>SALDO</h6>
                    <Balance balance={balance}>{balance}</Balance>
                </Overall>
        </Register>
    );
}

const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`

const Date = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: #c6c6c6;
    margin-right: 12px;
`

const colors = {
    negative: "#c70000",
    positive: "#03ac00"
}

const Value = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: ${props => {
        if(props.type === 'positive'){
            return colors.positive;
        } if (props.type === 'negative'){
            return colors.negative;
        }
    }};
`

const Description = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-right: 8px;
`

const AlignItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    flex-direction: column;
    margin-bottom: 22px;
    padding: 20px;
    position: relative;
`

const Overall = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    font-size: 17px;
    font-weight: 700;
    font-family: var(--font-body);
    position: absolute;
    bottom: 20px;
    left: 20px;
`
const Balance = styled.h6`
    font-weight: 400;
    color: ${props => {
        if(props.balance >= 0){
            return colors.positive;
        } if (props.balance < 0){
            return colors.negative;
        }}};
`

const Records = styled.div`
    width: 100%;
    overflow-y: scroll;
    margin-bottom: 40px;
`

const Delete = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: #c6c6c6;
    margin-left: 12px;
    cursor: pointer;
`