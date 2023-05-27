import React, {useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
const level1 = require("../images/level1.png");
const level2 = require("../images/level2.png");
const level3 = require("../images/level3.png");
const arrow = require("../images/arrow.png")
const CoursesPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={"course"}>

            <h1 className={"text-center m-5"}>Обери як розпочати свою подорож!</h1>
            <div className={"container position-relative"}>
                <img className="arrow2" src={arrow} alt={"arrow"}/>
                <img className="arrow1" src={arrow} alt={"arrow"}/>
            </div>
            <CourseCard title={"Level 1. Junior (A1-A2)"}
                        description={"4 заняття на неділю тривалістю 1 год. 30 хв. (Інтенсив)"}
                        comment={"Запрошуємо усіх новачків створити особисту історію у світі англійської!"}
                        img={level1}
                        bgColor={"#909BAE"}
            />
            <CourseCard title={"Level 2. Middle (B1-B2)"}
                        description={"3 заняття на неділю тривалістю 1 год. 30 хв."}
                        comment={"Та вивчи ти вже цей Present Simple! Цікава граматики – це не фантастика!"}
                        img={level2}
                        bgColor={"#B3BDD2"}
            />
            <CourseCard title={"Level 3. Senior (С1-С2)"}
                        description={"2 заняття на неділю тривалістю 1 год. 30 хв."}
                        comment={"Нарешті, ти готовий до цього! Усі уроки третього рівня складаються із спілкування з справжніми носіями мови."}
                        img={level3}
                        bgColor={"#DAD9DE"}
            />
        </div>
    );
};

export default CoursesPage;