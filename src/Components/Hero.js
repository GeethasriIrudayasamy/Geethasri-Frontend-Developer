import React from "react";
import "./Hero.css";
// import { Link } from "react-router-dom";
import hero from "../assets/hero_img.gif";

const Hero = () => {
    return (
        // <section className="home" id="home">
        //     <div className="home__container bd-grid">
        //         <div className="home__data">
        //             <h1 className="home__title">
        //             Join the amazing galaxy world.
        //             </h1>
        //             <h2 className="home__subtitle">
        //                  A world without limits,let's explore it together.
        //             </h2>
        //             <Link to="/explore" className="button">
        //                 Explore
        //             </Link>
        //         </div>
        //         <img src={hero} alt="" className="home__img" />
        //     </div>
        // </section>
        <section className="home" id="home">
            <div className="home__container container grid">
                <img src={hero} alt="" className="home__img" />

                <div className="home__data">
                    <h1 className="home__title">
                        Join the amazing <br /> galaxy world
                    </h1>
                    <p className="home__description">
                        A world without limits, let's explore it together. An
                        astonishing and incredible journey to space.
                    </p>
                    <a href="#about" className="button button--flex">
                        Explore
                        <i className="ri-arrow-right-down-line button__icon"></i>
                    </a>
                </div>

                <div className="home__social">
                    <span className="home__social-follow">Follow Us</span>

                    <div className="home__social-links">
                        <a
                            href="https://www.facebook.com/"
                            className="home__social-link"
                        >
                            <box-icon
                                type="logo"
                                name="facebook"
                                color="#00d9ff"
                            ></box-icon>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            className="home__social-link"
                        >
                            <box-icon
                                type="logo"
                                name="instagram"
                                color="#00d9ff"
                            ></box-icon>
                        </a>
                        <a
                            href="https://twitter.com/"
                            className="home__social-link"
                        >
                            <box-icon
                                type="logo"
                                name="twitter"
                                color="#00d9ff"
                            ></box-icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
