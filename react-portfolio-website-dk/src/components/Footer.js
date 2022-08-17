import "./FooterStyles.css";
import { AiOutlineHome, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <AiOutlineHome
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Birmingham,</p>
              <p>West Midlands</p>
            </div>
          </div>
          <div className="email">
          <AiOutlineMail
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>danielknight261@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <div className="social">
          <AiOutlineLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              />
            <p>Linkedin</p>

            <AiOutlineGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              />
            <p>Github</p>  
          </div>
        
          
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
