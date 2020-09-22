import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import svg1 from '../img/iconmonstr-github-1.svg'
import svg2 from '../img/iconmonstr-instagram-11.svg'
import svg3 from '../img/iconmonstr-whatsapp-1.svg'


export default class Nav extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
    render() {
        return (
            <>
             <nav className="nav-wrapper   transparent">
                    <div className="container ">
                    <a href="/" className="brnd-logo">LOGO</a>
                    <a href="/" className="sidenav-trigger" data-target="mobile-nav">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#photos">Potos</a></li>
                        <li><a href="#services">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                       <li><a  href="#"><img className='left-align' src={svg1} alt="social"/></a></li>
                       <li><a  href="#"><img className='left-align'src={svg2} alt="social"/></a></li>
                       <li><a  href="#"><img className='left-align' src={svg3} alt="social"/></a></li>
                    </ul>
                    <ul className="sidenav green" id="mobile-nav">
                        <li><a className="white-text" href="#photos">Potos</a></li>
                        <li><a className="white-text" href="#services">About</a></li>
                        <li><a className="white-text" href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </nav>
            </>
        )
    }
}
