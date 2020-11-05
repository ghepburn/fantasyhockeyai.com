import React from 'react';
import {withRouter, Link} from "react-router-dom";

const Navbar = ({history}) => {

    const isHome = history.location.pathname === "/";
    
    const titleNav = isHome ? "" : <Link to="/"><p className="navItem">FantasyHockey<span className="AI">AI</span></p></Link>;
    
    return (  
        <nav className="nav">
            {titleNav}
        </nav>
    );
}
 
export default withRouter(Navbar);