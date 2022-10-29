import React from 'react';
import SEO from "../common/SEO";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../common/header/HeaderTopBar';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import ServiceTwo from '../elements/service/ServiceTwo';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from '../elements/team/TeamFour';
import ContactOne from '../elements/contact/ContactOne';

const Corporate = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-5.jpg)`}}>
                    <div className="container" id="home">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-left">
                                    <h4 className="subtitle"><span className="theme-gradient">FOOD MANUFACTURING COMPANY</span></h4>
                                    <h1 className="title display-one">Cheese N' Bites</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Delicious cheese sticks</li>
                                        <li><span className="icon"><FiCheck /></span> Affordable prices</li>
                                        <li><span className="icon"><FiCheck /></span> Fast and free delivery</li>
                                    </ul>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <button className="btn-default btn-icon" target="_blank" href="#coming-soon">Purchase Now <i className="icon"><FiArrowRight /></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "These are our products and there are a lot varities to choose from, <br /> all of them are delicious though.."
                                    />
                            </div>
                        </div>
                        <ServiceTwo 
                            cardStyle = "card-style-1"
                            textAlign = "text-left"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <AboutTwo />

                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Clients Feedback."
                                    title = "Global Clients Around the World."
                                    description = ""
                                />
                            </div>
                        </div>
                        <CounterUpTwo column="col-lg-4 col-md-6 col-sm-6 col-12" counterStyle="counter-style-2" textALign="text-center" />     
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap" id="our-team">
                    <div className="wrapper plr--65 plr_md--15 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Experts Team"
                                        description = ""
                                    />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap" id='contact'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact Form"
                                        title = "Our Contact Address Here."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                        </div>

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Corporate
