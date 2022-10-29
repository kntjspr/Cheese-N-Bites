import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container" id="about-us">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">Corporate About.</span></h4>
                                    <h2 className="title mt--10">About Our Business.</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>Cheese 'N Bites was founded in 2022 by a group of friendly colleagues at Capitol University SHS after we noticed that people from our school building were having difficulty finding low-cost snacks and that the school cafeteria wasn't easily accessible, and that the majority of them didn't have time to go into the school canteen. Our team came up with the idea of making cheese 'n bites to alleviate the challenges that our classmates are now experiencing.</p>

                                
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">More About Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
