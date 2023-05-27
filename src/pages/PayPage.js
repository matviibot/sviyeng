import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const PayPage = () => {
    const [email, setEmail] = useState('')
    const [PIB, setPIB] = useState('')
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.href = "https://send.monobank.ua/jar/8Ekn2Mz8iW";

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePIBChange = (e) => {
        setPIB(e.target.value)
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="info-card d-flex position-relative">
                    <form onSubmit={e=>handleSubmit(e)} className="login-form">
                        <h1 className="text-center">Оплата</h1>
                        <hr/>
                        <p className={'text-danger text-center'}>! УВАГА ! <br/> Оплата проводиться через поповнення” МОНОБАНК” банки.
                            Перевірка платежу ведеться вручну менеджером, тому обов'язково після введення потрібної суми за ОБРАНИЙ ВАМИ курс в описі до переказу введІТЬ:
                            ПІБ, ЕЛЕКТРОННУ ПОШТУ та НАЗВУ КУРСУ. після оплати з вами зв'яжеться менеджер. </p>
                        <div className="p-5">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label h5 ">Ел. Пошта</label>
                                <input required value={email} onChange={ e => handleEmailChange(e)} type="email" className="form-control" id="email" placeholder="Введіть адресу електронної пошти" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pib" className="form-label h5">П.І.Б</label>
                                <input required value={PIB} onChange={e => handlePIBChange(e)} type="text" className="form-control" id="password" placeholder="Введіть ваше ПІБ" />
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-dark">Оплатити</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
};

export default PayPage;