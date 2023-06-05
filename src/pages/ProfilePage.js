import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const man2 = require("../images/Ellipse 6.png")
const ProfilePage = ({setLogin}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const englishLevel = 'B2'
    const navigate = useNavigate();
    // Fake learning process stats
    const learningStats = [
        {title: "Courses Completed", value: 12},
        {title: "Hours of Study", value: 240},
        {title: "Practice Exams", value: 8},
    ];

    // Fake other stats
    const otherStats = [
        {title: "Average Test Score", value: 85},
        {title: "Vocabulary Size", value: 5000},
        {title: "Reading Speed", value: "300 words per minute"},
    ];
    // Rest of your code...
    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, [])

    const getData = async () => {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.get(
                `http://localhost:8000/get_user?user_id=${localStorage.getItem('user_id')}`,
                {headers: headers}
            );
            console.log(response.data); // Handle the response as needed
            setName(response.data.name)
            setLastName(response.data.last_name)
            setEmail(response.data.email)

        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = () => {
        // Perform logout actions here
        // Example: Clear user session, update state, etc.
        setLogin(false);
        navigate("/login");
    };

    return (
        <div className="container profile mt-5">
            <div className="info-card">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <img src={man2} className="img-fluid profile-img pb-5 pe-5" alt="Profile"/>
                            <div className="ml-3 d-flex flex-column">
                                <div className="profile-name">{name} {last_name}</div>
                                <div className="profile-email">{email}</div>
                                <div className="profile-stats font-weight-bold">English Level: {englishLevel}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-4">
                        <h1 className="mb-4">Learning Process Stats</h1>
                        {learningStats.map((stat, index) => (
                            <div key={index}>
                                <p className="font-weight-bold">{stat.title}: {stat.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h1 className="mb-4">Other Stats</h1>
                        {otherStats.map((stat, index) => (
                            <div key={index}>
                                <p className="font-weight-bold">{stat.title}: {stat.value}</p>
                            </div>
                        ))}
                    </div>
                    {/* Add more columns with stats as needed */}
                </div>
                <div className="pb-4 bt-4">
                    <button onClick={handleLogout} className="logout-btn float-end">ВИЙТИ</button>
                </div>

            </div>
        </div>


    );
};

export default ProfilePage;