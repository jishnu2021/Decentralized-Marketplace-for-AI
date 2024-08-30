import React, { useState } from "react";
import "../style/contact.css";
import { useNavigate } from "react-router-dom";
import location from  "../images/location.png";
import phonepic from  "../images/phone.png";
import emailpic from  "../images/email.png";

const Contact = () => {

  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");



  const navigate = useNavigate();
  const inputs = React.useRef([]);

  const focusFunc = (index) => {
    const parent = inputs.current[index].parentNode;
    parent.classList.add("focus");
  };

  const blurFunc = (index) => {
    const parent = inputs.current[index].parentNode;
    if (inputs.current[index].value === "") {
      parent.classList.remove("focus");
    }
  };

  const SendData = async (event) => {
    event.preventDefault();
    const result = await fetch("http://localhost:5000/contactus", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div className="box1  bg-gray-900" style={{}}>
      <div className="container1">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="Location" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src={emailpic} className="icon" alt="Email" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src={phonepic} className="icon" alt="Phone" />
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us:</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  ref={(el) => (inputs.current[0] = el)}
                  onFocus={() => focusFunc(0)}
                  onBlur={() => blurFunc(0)}
                  required
                />
                <label>Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  ref={(el) => (inputs.current[1] = el)}
                  onFocus={() => focusFunc(1)}
                  onBlur={() => blurFunc(1)}
                  required
                />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  ref={(el) => (inputs.current[2] = el)}
                  onFocus={() => focusFunc(2)}
                  onBlur={() => blurFunc(2)}
                  required
                />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  ref={(el) => (inputs.current[3] = el)}
                  onFocus={() => focusFunc(3)}
                  onBlur={() => blurFunc(3)}
                  required
                />
                <label>Message</label>
                <span>Message</span>
              </div>
              <input
                type="submit"
                value="Send"
                className="btn"
                onClick={SendData}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
