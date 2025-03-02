import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from "../../images/logo.png"
import{FaCartArrowDown} from "react-icons/fa"


export default class Navbar extends Component {


    state = {
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
        navitem: "nav-item",
        menus: [{
            id: 1,
            text: "Home",
            url: "/",
        }, {
            id: 2,
            text: "About",
            url: "/about",
        }, {
            id: 3,
            text: "Services",
            url: "/services",},
         {
            id: 4,
            text: "Contact",
            url: "/contact",},
            {
                id: 5,
                text: <FaCartArrowDown />,
                url: "/",}
        ]
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState : false,
            navbarClass: "collapse navbar-collapse",
            navitem: "nav-item"
        }) : this.setState({
            navbarState : true,
            navbarClass: "collapse navbar-collapse show float-right",
            navitem: "nav-item ml-auto mr-auto"
    })}

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white ">
                <Link to="/" className="navbar-brand ml-5">
                <img src={logo} alt="LOGO" width = "40px" />
                </Link>
                <button 
                className = "navbar-toggler"
                type="button"
                onClick={this.myToggler}
                >
                    <span className = "text-white mr-3" >MENU</span>
                </button>
            <div className={this.state.navbarClass}>
                <ul className="navbar-nav ml-auto mr-5">
                    {this.state.menus.map(menu => {
                        return(
                            <li key = {menu.id} className={this.state.navitem}>
                            <Link to ={menu.url} className="nav-link text-white">
                                {menu.text}
                            </Link>
                        </li>        
                        )
                    })}
                </ul>
            </div>
            </nav>
        )
    }
}
