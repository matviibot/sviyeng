import React, {useEffect, useState} from 'react';
import {FiPhoneCall} from "react-icons/fi";
import axios from "axios";
import config from "bootstrap/js/src/util/config";
import {useNavigate} from "react-router-dom";
const RegisterPage = ({setLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')

    const navigate = useNavigate();
    // Rest of your code...
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.post(
                'http://localhost:8000/register',
                {
                    name: name,
                    last_name: last_name,
                    email: email,
                    password: password,
                },
                { headers: headers }
            );
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
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
                        <h1 className="text-center">Реєстрація</h1>
                        <hr/>
                        <div className="p-5">
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label h5 ">Ім'я</label>
                                <input required value={name} onChange={ e => handleNameChange(e)} type="text" className="form-control" id="email" placeholder="Введіть ваше ім'я" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label h5 ">Прізвище</label>
                                <input required value={last_name} onChange={ e => handleLastNameChange(e)} type="text" className="form-control" id="email" placeholder="Введіть ваше прізвище" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label h5 ">Ел. Пошта</label>
                                <input required value={email} onChange={ e => handleEmailChange(e)} type="email" className="form-control" id="email" placeholder="Введіть адресу електронної пошти" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label h5">Пароль</label>
                                <input required value={password} onChange={e => handlePasswordChange(e)} type="password" className="form-control" id="password" placeholder="Введіть ваш пароль" />
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-dark">Зареєструватися</button>
                            </div>
                            <div className={"text-center mt-2"}>
                                <a onClick={handleLoginClick}>Увійти</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
};

export default RegisterPage;