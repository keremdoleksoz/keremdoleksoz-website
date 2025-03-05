import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../../Context/LanguageContext";
import KDIcon from "../../Icons/kdlogo.png";
import ukflag from "../../Icons/english.png";
import trflag from "../../Icons/turkish.png";
import InstagramIcon from "../../Icons/instagram.png";
import LinkedInIcon from "../../Icons/linkedin.png";
import GitHubIcon from "../../Icons/github.png";

const Header = () => {
    const { content, handleLanguageChange, language } = useLanguage();

    return (
        <header className="topSection">
            {/* Logo */}
            <div className="logo">
                <img src={KDIcon} alt="KD Logo" />
            </div>

            {/* Navigation Menu */}
            <div className="headerContent">
                <h1 className="mainTitle">{content.mainTitle}</h1>
                <nav className="navBar">
                    <Link to="/" className="navLink">{content.nav.main}</Link>
                    <Link to="/aboutme" className="navLink">{content.nav.about}</Link>
                    <Link to="/contact" className="navLink">{content.nav.contact}</Link>
                </nav>
            </div>

            {/* Right Section: Language Selection and Social Media */}
            <div className="rightSection">
                {/* Language Selection */}
                <div className="languageBox">
                    <button
                        className={`languageButton ${language === "en" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("en")}
                    >
                        <img src={ukflag} alt="English" className="flagIcon" />
                    </button>
                    <button
                        className={`languageButton ${language === "tr" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("tr")}
                    >
                        <img src={trflag} alt="Türkçe" className="flagIcon" />
                    </button>
                </div>

                {/* Social Media Links */}
                <div className="socialLinks">
                    <a href="https://www.instagram.com/keremdoleksoz" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/keremdoleksoz" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://www.github.com/keremdoleksoz" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" className="icon" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
