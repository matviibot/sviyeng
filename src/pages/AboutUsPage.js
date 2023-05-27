import React, {useEffect} from 'react';

const women = require("../images/women.png")
const AboutUsPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={"container "}>
            <div className={"d-flex justify-content-center"}>
                <div className={"info-card"}>
                    <h1 className={"text-center mt-5"}>Про компанію</h1>
                    <p>&emsp;Ласкаво просимо до нашої онлайн-школи з англійської мови “СвійEng”! Ми – команда ентузіастів, які
                        поєднали свою пристрасть до мов та освіти, щоб допомогти вам освоїти англійську мову та досягти
                        нових висот у вашій лінгвістичній підготовці.</p>
                    <img src={women} alt={women}/>
                    <p>&emsp; У 2022 році ми відкрили офіс у Києві та знайшли найкращих викладачів з англійської, щоб у
                        підсумки
                        створити веб-сайт, де ви зможите вивчати англійську, а ми в свою чергу надихати, мотивувати та
                        допомогати досягаті своїх цілей наших студентів. Наш веб-сайт став джерелом знань та практичного
                        досвіду для тисяч студентів, які бажають досягти успіху в міжнародних зв'язках, навчанні за
                        кордоном
                        або просто спілкуванні з носіями мови.<br/><br/>
                        &emsp;Але що відрізняє нас від інших онлайн-шкіл англійської мови? Ми пропонуємо інноваційні методики
                        навчання, натхненні передовими технологіями та актуальними трендами в освіті. Наша мета – не
                        просто
                        дати вам знання, а й надихнути вас на вивчення англійської мови, створити справжнє захоплення та
                        допомогти вам досягти нових висот у розвитку мовних навичок.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;