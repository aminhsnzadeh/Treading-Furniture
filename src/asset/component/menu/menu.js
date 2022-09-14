import React from "react";
import ReactDOM from "react-dom";
import { Navitem, Logo, Miscmd } from "../text/misc-text";
import siteLogo from "../../img/logo.png";
import AOS from "aos";

class Navs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navContent : ['Home', 'About', 'Portfolio', 'Gallery', 'Blog', 'Contacts'],
            social : ['bi-facebook nav-icon', 'bi-instagram nav-icon', 'bi-whatsapp nav-icon', 'bi-twitter nav-icon'],
            link : ['#', '#about', '#rate', '#gallery', '#blog', '#contact'],
            linkSocial : ['#', 'https://instagram.com/amin.hsnzadeh', '#', '#'],
        }
        this.menu = React.createRef()
        this.btn = React.createRef()
        this.fullMenu = React.createRef()
        this.clicking = this.clicking.bind(this)
        this.fixedMenu = this.fixedMenu.bind(this)
    }
    clicking() {
        ReactDOM.findDOMNode(this.menu.current).classList.toggle('active-nav')
        const btnFlag = ReactDOM.findDOMNode(this.btn.current)
        if(btnFlag.className === 'bi-list') {
            btnFlag.className = 'bi-x'
            btnFlag.style.color = 'white'
        } else {
            btnFlag.className = 'bi-list'
            btnFlag.style.color = 'black'
        }
    }
    fixedMenu() {
        const _menu = ReactDOM.findDOMNode(this.fullMenu.current)
        if (window.scrollY > '200') {
            _menu.classList.add('menu-fix')
        } else {
            _menu.classList.remove('menu-fix')
        }
    }
    componentDidMount() {
        AOS.init();
    }
    render() {
        const navItmes = this.state.navContent.map((content, index)=> <Navitem key={content.toString()} value={content} href={this.state.link[index]} />)
        const socials = this.state.social.map((content, index)=> <li><a href={this.state.linkSocial[index]}><Logo key={content.toString()} id='nav-btn' class={content} /></a></li>)
        window.onscroll = this.fixedMenu
        return(
            <header>
                <section className="top-menu">
                    <Miscmd value='Amin Hasanzadeh' />
                    <ul>
                        {socials}
                    </ul>
                </section>
                <section className="menu" ref={this.fullMenu}>
                    <figure><img src={siteLogo} alt='website logo'></img></figure>
                    <nav className="desktop-nav">
                        <ul id="nav-menu">
                            {navItmes}
                        </ul>
                    </nav>
                    <nav className="mobile-nav">
                        <span className="bi-list" ref={this.btn} onClick={this.clicking}></span>
                        <ul ref={this.menu}>
                            {navItmes}
                            <ul>
                                {socials}
                            </ul>
                        </ul>
                    </nav>
                </section>
            </header>
            
        )
    }
}


export default Navs