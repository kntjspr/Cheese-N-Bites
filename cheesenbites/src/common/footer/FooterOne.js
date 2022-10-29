import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../elements/logo/Logo";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFive =  footerOne[5];
const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);

const FooterOne = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="logo">
                                        <Logo 
                                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                            image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                                        />
                                    </div>
                                    <h3 className="text-big">{footerIntem.title}</h3>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemOne.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexOneLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                   

                                    
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemThree.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                  
                                    
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="inner">
                                        <form className="newsletter-form" action="#">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter Your Email Here" />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn-default" type="submit">Submit Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterOne
