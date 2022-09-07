import UserContext from "../contexts/UserContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "../assets/css/reset.css";
import GlobalStyle from "../assets/css/globalStyles";
import {useState} from "react";
import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";
import Home from "./Home";
import Incomes from "./Incomes";
import Output from "./Output";

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
                    <Route path='/' element={<LoginPage />}/>
                    <Route path='/cadastro' element={<SignInPage />}/>
                    <Route path='/inicio' element={<Home />}></Route>
                    <Route path='/entrada' element={<Incomes />}></Route>
                    <Route path='/saida' element={<Output />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
