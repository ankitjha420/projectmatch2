import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {

    if(props.active === "feed"){
        return(
            <div className="navbar">
    
                <Link to = "/"><h1 className="homepageLogo">ProjectMatch</h1></Link>
                
                <ul className="navLinks">
                    <Link to="/feed"><li style={{borderBottomColor: "black",
                                                borderBottomWidth: "5px",
                                                borderBottomStyle: "solid",
                                                }}>Feed</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <li>Search🔍</li>
                </ul>
            </div>
        )
    }

    if(props.active === "login"){
        return(
            <div className="navbar">
    
                <Link to = "/"><h1 className="homepageLogo">ProjectMatch</h1></Link>
                
                <ul className="navLinks">
                    <Link to="/feed"><li>Feed</li></Link>
                    <Link to="/login"><li style={{borderBottomColor: "black",
                                                borderBottomWidth: "5px",
                                                borderBottomStyle: "solid",
                                                }}>Login</li></Link>
                    <li>Search🔍</li>
                </ul>
            </div>
        )
    }

    else{
        return(
            <div className="navbar">
    
                <Link to = "/"><h1 className="homepageLogo">ProjectMatch</h1></Link>
                
                <ul className="navLinks">
                    <Link to="/feed"><li>Feed</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <li>Search🔍</li>
                </ul>
            </div>
        )
    }
}

export default Navbar