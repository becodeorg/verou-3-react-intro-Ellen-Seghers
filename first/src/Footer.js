import React from "react";
import './application.css';

const Footer = () => {
    return (
        <div className="text-center flex items-center justify-center">
            <h3 className="font-bold h-14 py-4">Are your todo's done?</h3>
            <img src="check-all.svg" alt="Check all" className="h-9"/>
        </div>
    )
}

export default Footer;