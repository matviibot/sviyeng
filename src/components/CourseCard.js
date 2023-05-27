import React from 'react';
import lightenColor from "./lightenColor";
import {useNavigate} from "react-router-dom";

const CourseCard = ({bgColor = "#D5E8EF", title, description, comment, img}) => {
    const navigate = useNavigate();

    return (
        <div className="container position-relative">
            <div className="course-card" style={{ backgroundColor: bgColor }}>
                <div className="card-content">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <p>{comment}</p>
                </div>
                <div className="level-container">
                    <img className="level" src={img} alt="level" />
                </div>
            </div>
            <button onClick={()=>navigate("/pay")} className={"btn buy"} style={{ backgroundColor: lightenColor(bgColor,30) }}>
                Записатися
            </button>
        </div>

    );
};

export default CourseCard;