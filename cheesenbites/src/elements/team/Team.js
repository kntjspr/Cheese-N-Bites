import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Separator from "../separator/Separator";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TeamOne from "./TeamOne";


const Team = () => {
    return (
        <>
            <SEO title="Team || Cheese 'N Bites" />
               
            <Layout>
                <BreadcrumbOne 
                    title="Cheese 'N Bites Team"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Team"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Experts."
                                            title = "Our Expert Team."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    
                    <Separator />

                    {/* Start Elements Area  */}
              
                    {/* End Elements Area  */}


                </div>
            </Layout>
        </>
    )
}
export default Team;