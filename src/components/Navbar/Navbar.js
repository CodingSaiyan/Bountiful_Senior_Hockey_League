import React from 'react';
import './Navbar.css';

import {Link, withRouter} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <div id="navbar">
                <Link to='/'><a href="#default" id="logo">BSHL</a></Link>
                <div id="navbar-right">
                    <Link to='/b-league/home'>Home</Link>
                    <a href="#contact">Schedule</a>
                    <a href="#about">Teams</a>
                    <a href="#about">Standings</a>
                    <a href="#about">Stats</a>
                    <a href="#about">League Info / Rules</a>
                    
                </div>
            </div>

        </div>
    )
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
      document.getElementById("navbar").style.background = "green";
    } else {
      document.getElementById("navbar").style.padding = "60px 10px";
      document.getElementById("logo").style.fontSize = "35px";
      document.getElementById("navbar").style.background = "transparent";
    }
  }

  export default withRouter(Navbar);