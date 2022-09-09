import styled from "styled-components";
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Record(){
    const {records} = useContext(UserContext);
    let balance = 0;
    let positive = undefined;

    records.forEach(record => {
        if(record.type === 'positive'){
            balance += record.value
        } if (record.type === 'negative'){
            balance -= record.value
        }
    });

    return(
        <Register>
            {records.map((record, index) => (
                <Item index={index}>
                    <Date>{record.date}</Date>
                    <AlignItem>
                        <Description>{record.description}</Description>
                        <Value type={record.type}>{record.value}</Value>
                    </AlignItem>
                </Item>
            ))}
                <Overall>
                    <h6>SALDO</h6>
                    <Balance>{balance}</Balance>
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

const Value = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: #c70000;
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
    color: #000000;
`


