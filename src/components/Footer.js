import React from 'react';
import {AiFillYoutube, AiOutlineInstagram} from "react-icons/ai"
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <div className={"d-flex"}>
                    <div className={"me-5"}>
                        <h1>РАЗОМ<br/>
                            ЗНАЄМО<br/>
                            БІЛЬШЕ!</h1>
                        <div className={""}>
                            <a href="https://www.youtube.com/@sviyeng" target="_blank"><AiFillYoutube className={"icon"} size={"8rem"}/></a>
                            <a href="https://www.instagram.com/sviy_eng/" target="_blank"><AiOutlineInstagram size={"6.3rem"}/></a>
                        </div>

                    </div>
                    <div className={"info"}>
                        <h1 className={"mb-4"}>Iнформація о компанії</h1>
                        <ul className="list-unstyled d-flex flex-column">
                            <a onClick={()=>navigate('/about')}>Про компанію</a>
                            <a onClick={()=>navigate('/copyright')}>Умови використання сайту</a>
                            <a onClick={()=>navigate('/contact')}>Контакти</a>
                        </ul>

                    </div>
                </div>

                <hr/>
                <div className={"d-flex justify-content-between"}>
                    <h2>Україна, м. Київ,<br/>
                        вул. Василя Липківського 43,<br/>
                        03035</h2>
                    <h2 className={"copy"}>© 2022–2023 Онлайн-школа «СвійEng»</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;