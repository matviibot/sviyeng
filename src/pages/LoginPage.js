import React, {useEffect, useState} from 'react';
import {FiPhoneCall} from "react-icons/fi";
import axios from "axios";
import config from "bootstrap/js/src/util/config";
import {useNavigate} from "react-router-dom";
const LoginPage = ({setLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate();
    // Rest of your code...
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    const handleRegisterClick = () => {
        navigate('/register');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.post(
                'http://localhost:8000/login',
                {
                    email: email,
                    password: password,
                },
                { headers: headers }
            );
            console.log(response.data); // Handle the response as needed
            if (response.data.success) {
                setLogin(true)
                console.log('success')
            }
        } catch (error) {
            setIsError(true)
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="info-card d-flex position-relative">
                    <form onSubmit={e=>handleSubmit(e)} className="login-form">
                        <h1 className="text-center">Вхід</h1>
                        <hr/>
                        <div className="p-5">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label h5 ">Ел. Пошта</label>
                                <input value={email} onChange={ e => handleEmailChange(e)} type="email" className="form-control" id="email" placeholder="Введіть адресу електронної пошти" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label h5">Пароль</label>
                                <input value={password} onChange={e => handlePasswordChange(e)} type="password" className="form-control" id="password" placeholder="Введіть ваш пароль" />
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-dark">Увійти</button>
                            </div>
                            <div className={"text-center mt-2"}>
                                <a onClick={handleRegisterClick}>Зареєструватися</a>
                            </div>
                            {isError && <div className="alert alert-danger mt-3" role="alert">
                                Невірний логін або пароль
                            </div>}
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
};

export default LoginPage;