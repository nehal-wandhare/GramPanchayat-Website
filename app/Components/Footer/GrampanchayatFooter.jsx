"use client";

import React, { useEffect } from "react";
import "./GrampanchayatFooter.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function GrampanchayatFooter() {

    return (
        <>

            <footer className="footer">
                <h3 className="follow-title">आम्हाला फॉलो करा</h3>


                <div className="social-icons">
                    <a href="#"><img src="/Images/footerIcons/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="/Images/footerIcons/twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="/Images/footerIcons/instagram.webp" alt="Instagram" /></a>
                    <a href="#"><img src="/Images/footerIcons/youtube.png" alt="YouTube" /></a>
                </div>


                <div className="footer-links">
                    <a href="#">Copyright Policy</a>
                    <a href="#">Disclaimer</a>
                    <a href="#">Privacy Policy</a>
                    <a href="/sampark">Contact Us</a>
                </div>


                <div className="footer-text">
                    <p>Website Designed, Developed & Maintained by Sanket Aswale , Sagar Salve , Nehal Wandhare.</p>
                    <p>Content provided by Grampanchayat Office, Government of Maharashtra</p>
                    <p>
                        Technical issues and updates may require some time for resolution – 7083013207
                        
                    </p>
                </div>


                <div className="gov-logos">
                    <img src="/Images/footerIcons/swachh-bharat.png" alt="Swachh Bharat" />
                    <img src="/Images/footerIcons/digital-india-logo.png" alt="Digital India" />
                    <img src="/Images/footerIcons/mygov.png" alt="India Gov" />
                    <img src="/Images/footerIcons/mh_logo.png" alt="Maharashtra Govt" />
                    <img src="/Images/footerIcons/portal.jpg" alt="MyGov" />
                    <img src="/Images/footerIcons/Meity_logo.png" alt="Startup India" />
                    <img src="/Images/footerIcons/pm-india-logo.jpg" alt="PM India" />
                </div>
            </footer>
        </>
    )
}