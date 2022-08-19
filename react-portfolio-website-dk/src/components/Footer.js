import "./FooterStyles.css";
import { AiOutlineHome, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-contents">
          <div>
            <AiOutlineHome
            />
            <p>Birmingham,</p>
              <p>West Midlands</p>
          </div>

          <div>
            <AiOutlineMail/>
            <p>danielknight261@gmail.com</p>
          </div>
        
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
