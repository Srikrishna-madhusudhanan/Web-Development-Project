import React from "react";
import "./footer.css"
const Footerlast =()=>{
    return(
        <footer>
        <div className="questions">
            Questions? Call <a href="faq">000-800-919-1694</a>
        </div>
        <div className="footer">
            <div className="footer-item">
                <a href="faq">FAQ</a>
                
                <a href="faq">Privacy</a>
                
            </div>

            <div className="footer-item">
                <a href="faq">Help Centre</a>
                
                <a href="faq">Cookie Preferences</a>
                
            </div>
            <div className="footer-item">
                <a href="faq">Account</a>
                <a href="faq">Terms and conditions</a>
                
               
            </div>

            <div className="footer-item">
                
                <a href="faq">Terms of Use</a>
                <a href="faq">Contact Us</a>

            </div>


        </div>

        <div>
            <div className="follow">Follow us on</div>
        <div className="socialIcons">
            <a href=""><i className="fa-brands fa-facebook fbicon"></i></a>
            <a href=""><i className="fa-brands fa-instagram instaicon"></i></a>
            <a href=""><i className="fa-brands fa-twitter  twittericon"></i></a>
            <a href=""><i className="fa-brands fa-google-plus googleicon"></i></a>
            <a href=""><i className="fa-brands fa-youtube youtubeicon"></i></a>
        </div>
       
        
    </div>
    
        
    </footer>
    );
};
export default Footerlast;