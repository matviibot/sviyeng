import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const logo = require('../images/logo2.png');

const Header = ({ isLogin }) => {
    const navigate = useNavigate();



    return (
        <div className="bg-main">
            <div className="header container d-flex justify-content-center align-items-center">
                <a onClick={() => navigate("/")}>
                    <img src={logo} alt={logo} className="logo" />
                </a>
                <div className="ms-auto nav-bar">
                    <a className="nav-btn" onClick={() => navigate("/courses")}>
                        КУРСИ
                    </a>
                    <a className="nav-btn" onClick={() => navigate("/contact")}>
                        КОНТАКТИ
                    </a>
                    {isLogin ? (
                        <a onClick={() => navigate("/profile")} className="nav-btn light">
                            ПРОФІЛЬ
                        </a>
                    ) : (
                        <a onClick={() => navigate("/login")} className="nav-btn light">
                            УВІЙТИ
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Header