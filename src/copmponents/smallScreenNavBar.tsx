import { useState } from 'react';
import { NavComponent } from './nav';

interface SmallScreensNavbarProps {
    navClass?: any;
    linkClassName?: any;
  }
const SmallScreensNavbar = ({ navClass, linkClassName }:SmallScreensNavbarProps) =>{
    // declare 'translate' as a state variable
    let [translate, setTranslate ] = useState(true);
    return(
        <div className={navClass}> 
             <button className="hamburger-btn"
                     onClick= {()=> setTranslate(!translate)}>  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */} 
                 {translate?<span>&#9776;</span>:<span className={linkClassName}>&times;</span>}
             </button>
             {/*hide and show the sidebar list based on whether translate is true or false*/}
             <div id="sidebar-list" className={`${translate? "addTransiton": "removeTransition"}`} >
                <NavComponent
                    navClass="nav-small"
                    linkClassName = "nav-small-link"
                    onClick = {()=>setTranslate(true)}  
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar;