import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Contact.css"
import instagram from "../../assets/insta.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"

function Contact() {
    return (
        <div className="contactPage">
            <Navbar />
            <div className="contactCardHolder">
                <div className="contactCard">
                    <span id="reach">REACH US AT</span>
                    <div className="emailHolder">
                        <div className="emails support">
                            <span>support@kicksup.com</span>
                            <p>for any technical support</p>
                        </div>
                        <div className="emails info">
                            <span>infot@kicksup.com</span>
                            <p>for more information</p>
                        </div>
                        <div className="emails feedback">
                            <span>feedback@kicksup.com</span>
                            <p>to send your feedback</p>
                        </div>
                        <div className="emails jobs">
                            <span>jobs@kicksup.com</span>
                            <p>to work with us</p>
                        </div>
                    </div>


                </div>
                <div className="contactCard_social">
                    <div className="social_part1">
                        <p>stay in touch</p>
                    </div>
                    <div className="social_part1">
                        <div className="icon_holder">
                            <img src={ twitter} alt="twitter" />
                        </div>
                        <div className="icon_holder">
                            <img src={instagram} alt="twitter" />
                        </div>
                        <div className="icon_holder">
                            <img src={facebook} alt="twitter" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact