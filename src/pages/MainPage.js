import React, {useEffect} from 'react';
import Header from "../components/Header";
import Head from "../components/Head";
import Body from "../components/Body";
import Footer from "../components/Footer";

const MainPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="bg-main">
                <Head/>
            </div>
            <div>
                <Body/>
            </div>

        </>
    );
};

export default MainPage;