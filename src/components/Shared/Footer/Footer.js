import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {

    const noNamed = [
        { name: "Bike Buy", link: "/services" },
        { name: "Bike Modify", link: "/services" },
        { name: "Bike Repair", link: "/services" }
    ]
    const ourAddress = [
        { name: "Basundhara - Dhaka", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]
    const engine = [
        { name: "Parts Chnage", link: "/services" },
        { name: "Engine Fixed", link: "/services" },
        { name: "Fatal Service", link: "/services" }
    ]
    const services = [
        { name: "Tire Change", link: "/services" },
        { name: "Light Change", link: "/services" },
        { name: "Oil Chnage", link: "/services" }
    ]


    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Engine" menuItems={engine} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon  tada active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon tada" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon tada"  icon={faTwitter} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call Now</h6>
                            <button className="btn-color">+123456789</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;