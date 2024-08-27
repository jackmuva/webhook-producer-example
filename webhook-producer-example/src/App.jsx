import './App.css'
import LoginPage from "./ui/pages/LoginPage.jsx";
import ConfirmUserPage from "./ui/pages/ConfirmUserPage.jsx";
import HomePage from "./ui/pages/HomePage.jsx";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EndpointConfigPage from "./ui/pages/EndpointConfigPage.jsx";

function App() {
    const isAuthenticated = () => {
        const accessToken = sessionStorage.getItem('accessToken');
        return !!accessToken;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/confirm" element={<ConfirmUserPage />} />
                <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" />} />
                <Route path="/endpoint-config" element={isAuthenticated() ? <EndpointConfigPage /> : <Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
