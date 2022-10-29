import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Home</Link>
            </li>
        
            <li className="has-droupdown"><Link to="team">Team</Link></li>

            <li className="with-megamenu"><Link to="about-us">About</Link>
                <div className="rn-megamenu">
                    <div className="wrapper">
                      
                    </div>
                </div>
            </li>

 
        </ul>
    )
}
export default Nav;
