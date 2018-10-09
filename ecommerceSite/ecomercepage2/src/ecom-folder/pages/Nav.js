import React from 'react';
import { NavLink } from "react-router-dom"
import auth0Client from "../../auth"

const Nav = () => {
    return(
        <header>
            <nav>
                <ul className="NavBar">
                    <li>
                     <NavLink to="/" activeStyle={{color:"red"}} exact>
                     Home
                     </NavLink>
                    </li>   
                    <li>
                     <NavLink to="/products"  activeStyle={{color:"red"}} exact>
                     Products
                     </NavLink>
                    </li>    
                    <li>
                     <NavLink to="/contact"  activeStyle={{color:"red"}} exact>
                     Contact
                     </NavLink>
                    </li>    
                    {auth0Client.isAuthenticated() ? <li><NavLink to="/admin">Admin</NavLink></li> : null}   
                </ul>
                {!auth0Client.isAuthenticated() && (
                 <button className="header__auth" onClick={auth0Client.signIn} >Log In</button>
               )}
               {auth0Client.isAuthenticated() && (
                   <button className="header__auth" onClick={auth0Client.signOut} >Log Out</button>
               )}
            </nav>
        </header>
    )
}



export default Nav;