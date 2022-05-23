import React, { Component } from "react";
import "./AdoptionForm.css"
import "react-dropdown/style.css";
import blackArrow from "../images/blackarrow.svg"
import { NavLink } from "react-router-dom";

export class AdoptionForm extends Component {

    render() {
        return (
            <div className="big-container">
                <div className="form-container">
                    <div className="back-title-container">
                        <NavLink to="/preadopt">
                            <div className="back-button-container">
                                <img className="arrow" src={blackArrow} alt="" />
                                <button className="back-button">Back</button>
                            </div>
                        </NavLink>
                        <div className="form-title">
                            <p>Adoption Form </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="name-container">
                        <div className="namesform">
                            <label>First name: <span>*</span></label>
                            <input required placeholder="First name"></input>
                        </div>
                        <div className="namesform">
                            <label>Last name: <span>*</span></label>
                            <input required placeholder="Last name"></input>
                        </div>
                    </div>
                    <div className="address-container">
                        <div className="address-title">Address</div>
                        <div className="line1">
                            <label>Address line 1: <span>*</span></label>
                            <input required placeholder="Street name & number"></input>
                        </div>
                        <div className="line1">
                            <label>Address line 2:</label>
                            <input placeholder="Suite, apartment"></input>
                        </div>
                        <div className="line2-container">
                            <div className="line2">
                                <label>City: <span>*</span></label>
                                <input required placeholder="City"></input>
                            </div>
                            <div className="line2">
                                <label>State: <span>*</span></label>
                                <input required placeholder="State"></input>
                            </div>
                            <div className="line2">
                                <label>Zip code: <span>*</span></label>
                                <input required placeholder="Zip code"></input>
                            </div>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-title">Contact information</div>
                        <div className="phone-email-cont">
                            <div className="namesform">
                                <label>Phone number: <span>*</span></label>
                                <input required type="tel" placeholder="+14245555555"></input>
                            </div>
                            <div className="namesform">
                                <label>Email address: <span>*</span></label>
                                <input required type="email" placeholder="john@doe.com"></input>
                            </div>
                        </div>
                    </div>
                    <div className="family-routine">
                        <div className="family-status"></div>
                        <div className="children"></div>
                        <div className="yes-no-child"></div>
                        <div className="random-text"></div>
                        <div className="input-textarea"></div>
                    </div>
                </div>
            </div>
        )
    }
}