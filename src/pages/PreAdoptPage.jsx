import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./PreadoptPage.css";
import blackArrow from "../images/blackarrow.svg"

export class PreAdoptPage extends Component {

    render() {
        return (
            <div className='main-container'>
                <NavLink to="/adopt">
                    <div className="back-button-container">
                        <img className="arrow" src={blackArrow} alt="" />
                        <button className="back-button">Back</button>
                    </div>
                </NavLink>
                <div className='image'></div>
                <div className='name'></div>
                <div className='age'></div>
                <div className='breed'></div>
                <div className='color'></div>
                <div className='size'></div>
                <NavLink to="/adoptionform">
                    <button>ADOPT</button>
                </NavLink>
            </div>
        )
    }
}