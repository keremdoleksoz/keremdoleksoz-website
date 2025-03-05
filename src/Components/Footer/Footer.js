import React from "react";
import "./Footer.css";
import { useLanguage } from "../../Context/LanguageContext";

const Footer = () => {
    const { content } = useLanguage();

    return (
        <footer className="footer">
            <p className="footer-text">{content.footer.text}</p>
        </footer>
    );
};

export default Footer;
