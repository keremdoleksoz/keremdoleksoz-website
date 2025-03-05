import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
