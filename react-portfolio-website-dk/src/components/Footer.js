import "./FooterStyles.css";
import {AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-contents">
          <div>
           <AiOutlineLinkedin/>
           <p>Linkedin</p>
          </div>

          <div>
            <AiOutlineGithub/>
            <p>Github</p>  
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
