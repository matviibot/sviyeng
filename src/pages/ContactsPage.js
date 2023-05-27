import React, {useEffect} from 'react';
import women from "../images/women.png";
import {FiPhoneCall} from "react-icons/fi";

const ContactsPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="info-card contacts d-flex position-relative">
                    <div>
                        <h1 className="text-center contacts">Контакти</h1>
                        <h2>Офіс в україні:</h2>
                        <p>Фактична адреса: Василя липківського 43, 03035, м. Київ, Україна</p>
                        <h2>Номера телефонів:</h2>
                        <p>+380986483251<br />
                            +380663851907</p>
                        <h2>Email:</h2>
                        <p>sviyengua@gmail.com</p>
                    </div>
                    <div className="position-absolute bottom-0 end-0 p-4">
                        <a className={"icon-phone"} href={""}><FiPhoneCall className="phone" size="5rem" /></a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ContactsPage;