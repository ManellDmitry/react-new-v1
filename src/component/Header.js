import React from "react";
import Navigation from "./Navigation";
import {Logo} from "./Logo";

 function Header({links}){
    return(
        <header>
             <Logo color="black"/>
            <Navigation links={links}/>
        </header>
    )
}
export default Header;