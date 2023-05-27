import React from 'react';
import {ReactComponent as Gal} from '../images/GoogleLogo.svg';
import Review from "./Review";
import {useNavigate} from "react-router-dom";

const girl1 = require("../images/girl1.png")
const man1 = require("../images/Ellipse 2.png")
const man2 = require("../images/Ellipse 5.png")
const man3 = require("../images/Ellipse 6.png")

const Body = () => {
    const navigate = useNavigate();
    return (
        <div className="container body">
            <div>
                <h1 className="text-center title mt-0">Головне, що треба знати:</h1>

                <div className="card1">
                    <div>
                        <h2>Занурення у мовне середовище<br/>
                            з першого заняття!</h2>
                        <br/>
                        <h3>Індивідуальний підхід</h3>
                        <p>Знайдемо потрібний ключик саме до вас, щоб<br/> навчання проходило легше й цікавіше, а-ніж пусті<br/> тексти у книзі.</p>
                         <br/>
                        <h3>Найкращі фахівці</h3>
                        <p>Наша команда це справжні професіонали з<br/> розмовним рівнем англійської, які регулярно<br/> спілкуються з носіями мови.</p>
                            <button onClick={()=>navigate("/courses")} className="btn btn-light"><p className="">Дивитися курси</p></button>
                    </div>
                    <img className="girl1" src={girl1} alt="girl1"/>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-0 m-5">
                <Gal className="gal"/>
            </div>
            <section>
                <h1 className="text-center title mt-0 ">Відгуки наших учнів</h1>
                <div className="d-flex justify-content-center align-items-start">
                    <Review name={'Іван Шевченко'} img={man1} text={"Курси англійської Просто супер! Викладачі відмінні, матеріали цікаві, практика корисна. якщо коротко - Рекомендую!"} />
                    <Review name={'Олег Броворський'} img={man3} text={"Був приємно вражений курсами англійської мови, які я відвідав. \nЦей досвід дозволив швидко вдосконалити свої навички мовлення та розуміння англійської!"} />
                    <Review name={'Марія Cкочко'} img={man2} text={"Я була у захваті від курсів англійської мови! Вони були неймовірно цікавими, викладачі дуже професійні та Дають багато мотиваціЇ."} />
                </div>
            </section>

        </div>
    );
};

export default Body;