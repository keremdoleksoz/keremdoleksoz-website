import React from "react";
import "./HomePage.css";
import { useLanguage } from "../../Context/LanguageContext";
import KD from "../../Icons/keremdoleksoz.jpg";

const HomePage = () => {
    const { content } = useLanguage();

    return (
        <main className="about">
            <div className="about-content">
                <div className="about-text">
                    <div className="text-content">
                        <h1 className="title">{content.about.title}</h1>
                        <p className="description">{content.about.description}</p>
                    </div>
                    <div className="about-button-container">
                        <a href="/aboutme" className="about-button">{content.about.buttonText}</a>
                    </div>
                </div>
                <div className="about-image">
                    <img src={KD} alt="Kerem Döleksöz" className="image" />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
