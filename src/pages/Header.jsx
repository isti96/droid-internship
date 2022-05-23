import logo from '../images/pets_black_24dp.svg';
import searchBlack from '../images/search_black_24dp.svg';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

export class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="menu-mobile-icon"><FaBars size={30} /></div>
                <NavLink to="/">
                    <div className="logo-name">
                        <div className="logo"><img src={logo} alt="" /> </div>
                        <div className="name"> Paws Animal Shelter </div>
                    </div>
                </NavLink>
                <div className="menubar">
                    <div className="menubar-item">
                        <div className="menubar-search-text"> SEARCH</div>
                        <div className="menubar-search-icon">
                            <img id="searchblack1" src={searchBlack} alt="" />
                        </div>
                    </div>
                    <img id="searchblack2" src={searchBlack} alt="" />
                    <div className="menubar-item"> ABOUT US </div>
                    <div className="menubar-item">  DONATE</div>
                    <div className="menubar-item"> FOSTER </div>
                    <NavLink to="/adopt">
                        <button className="menubar-adopt"> ADOPT</button>
                    </NavLink>
                    <div className="menubar-item"> OTHER</div>
                </div>
            </div>
        )
    }
}