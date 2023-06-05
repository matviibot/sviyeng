
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CoursesPage from "./pages/CoursesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PayPage from "./pages/PayPage";
import CopyrightPage from "./pages/CopyrightPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="App">
            <Router>
                <Header isLogin={isLogin}/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/profile" element={isLogin?<ProfilePage setLogin={setIsLogin} />:<Navigate to="/login" replace />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/copyright" element={<CopyrightPage />} />
                    <Route path="/contact" element={<ContactsPage />} />
                    <Route path="/pay" element={<PayPage />} />
                    <Route
                        path="/login"
                        element={<LoginPage setLogin={setIsLogin} />}
                    />
                    <Route
                        path="/register"
                        element={<RegisterPage setLogin={setIsLogin} />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
