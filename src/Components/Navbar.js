import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const nav_items = [
        { id: 1, link: "home" },
        { id: 2, link: "explore" },
    ];

    const menuHandler = () => {
        setShowMenu((prevValue) => !prevValue);
        // console.log(showMenu);
    };
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    <img src={Logo} alt="" className="nav__logo-img" />
                    SPACE
                </a>

                <div
                    className={showMenu ? "nav__menu show-menu" : "nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        {nav_items.map((item) => (
                            <li className="nav__item" key={item.id}>
                                <a
                                    href={`#${item.link}`}
                                    className={"nav__link"}
                                >
                                    {item.link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="nav__toggle"
                    id="nav-toggle"
                    onClick={menuHandler}
                >
                    <box-icon
                        name={showMenu ? "x" : "menu"}
                        color="white"
                    ></box-icon>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
