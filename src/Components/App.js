import UserContext from "../contexts/UserContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "../assets/css/reset.css";
import GlobalStyle from "../assets/css/globalStyles";
import {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Records from "./Records";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import PrivatePage from "./PrivatePage";

export default function App(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [password2, setPassword2] = useState('');

    const contextValue = {
        email, setEmail, password, setPassword, name, setName, password2, setPassword2 
    };

    return(
        <UserContext.Provider value={contextValue}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />}/>
                    <Route path='/cadastro' element={<SignUp />}/>
                            <Route path='/registros' element={
                                <PrivatePage>
                                    <Records />
                                </PrivatePage>
                            }/>
                            <Route path='/entrada' element={
                                <PrivatePage>
                                    <Incomes />
                                </PrivatePage>
                            }/>
                            <Route path='/saida' element={
                                <PrivatePage>
                                    <Expenses />
                                </PrivatePage>
                            }/>
                </Routes>x
            </BrowserRouter>
        </UserContext.Provider>
    )
}
