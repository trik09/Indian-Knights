import React, { useState } from "react";
import "../css/style.css";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Indian Knights</div>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                &#9776;
            </div>
            <nav className={`navbar ${isMobileMenuOpen ? "mobile show" : ""}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#tournaments">Tournaments</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
