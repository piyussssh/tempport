import React from "react";
import "../compo.css";
import {
  IoMdMail,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io";

function Conthome() {
  return (
    
      <div className="container d-f a-c" id="contact">
        <div className="contactform-cont d-f jc-c a-c">
          <form action="https://formsubmit.co/mvsr1303@gmail.com" method="POST">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Full Name"
            />
            <br />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <br />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Type message here..."
            ></textarea>
            <br />
            <button id="submitbtn" className="">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-cont d-f-c jc-c a-c">
          <div className="social-cont d-f jc-sb a-c">
            <a href="#" className="col-sec">
              <h2>
                <IoMdMail />
              </h2>
            </a>
            <a href="#" className="col-sec">
              <h2>
                <IoLogoGithub />
              </h2>
            </a>
            <a href="#" className="col-sec">
              <h2>
                <IoLogoInstagram />
              </h2>
            </a>
            <a href="#" className="col-sec">
              <h2>
                <IoLogoLinkedin />
              </h2>
            </a>
            <a href="#" className="col-sec">
              <h2>
                <IoLogoTwitter />
              </h2>
            </a>
          </div>
          <div className="map-cont">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3916807369715!2d75.89353605058633!3d22.75084113206479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302aa0cd59c5d%3A0x57ef6ab67c13ea2b!2sVijay%20Nagar%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1665476177042!5m2!1sen!2sin"></iframe>
          </div>
        </div>
      </div>
   
  );
}
export default Conthome;
