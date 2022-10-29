import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'
// Pages import Here 
import Corporate from "./pages/Corporate";
import Team from "./elements/team/Team.js";
import AboutUs from "./pages/AboutUs";
// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>
                    


                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
