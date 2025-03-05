import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import { LanguageProvider } from "./Context/LanguageContext";
import BackgroundImage from "./Icons/background.jpg"; // Arka plan resmi import edilir

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div
                    style={{
                        backgroundImage: `url(${BackgroundImage})`, // Dinamik resim
                        backgroundRepeat: "repeat", // Resim tekrar eder
                        backgroundSize: "auto", // Varsayılan boyut
                        minHeight: "100vh", // Tüm ekran yüksekliği
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <Layout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
