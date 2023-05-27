import React from 'react';
import peopleImage from '../images/people1.png';

const Head = () => {
    return (
        <div className="container head d-flex justify-content-between align-items-center">
            <div className={"mb-auto"}>
                <h1 className="title">Відкрий світ <br /> англійської!</h1>
                <h3>Мова доступна всім!<br /> курси, що змінюють життя.</h3>
            </div>
            <div>
                <img className="people1" src={peopleImage} alt="People" />
            </div>
        </div>
    );
};

export default Head;
