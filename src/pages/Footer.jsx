import React, { Component } from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import "./Footer.css";

export class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="empty" />
                <div className="copyright"> Copyright © 2022 Paws Animal Shelter. All Rights Reserved</div>
                <div className="icons-media">
                    <div className="icon-item"><FaFacebook size={40} /></div>
                    <div className="icon-item"><FaTwitter size={40} /></div>
                    <div className="icon-item"><FaInstagram size={40} /></div>
                </div>
            </div>
        )
    }
}