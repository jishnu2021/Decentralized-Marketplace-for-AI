import React, { useState } from "react";
import "../style/setting.css";
import {useNavigate} from 'react-router-dom'


const Setting = (email) => {
  
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email:"",
    // email: email,
    phoneNumber: "",
    oldPassword: "",
    newPassword: "",
    gender: "",
  });
  console.log("the email is ",email)
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    setImage(e.target.files[0]); // Store the file object
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("name", formData.name);
  data.append("address", formData.address);
  data.append("email", formData.email);
  data.append("phoneNumber", formData.phoneNumber);
  data.append("oldPassword", formData.oldPassword);
  data.append("newPassword", formData.newPassword);
  data.append("gender", formData.gender);

  if (image) {
    // Ensure `image` is a File object
    data.append("image", image); // Append the file object
  }

  try {
    const response = await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Profile created:", result);
    alert("Setting saved on the server");

    // Convert formData to a plain object for localStorage
    const {
      name,
      address,
      email,
      phoneNumber,
      oldPassword,
      newPassword,
      gender,
    } = formData;
    localStorage.setItem(
      "setting",
      JSON.stringify({
        name,
        address,
        email,
        phoneNumber,
        oldPassword,
        newPassword,
        gender,
      })
    );

    navigate("/");
  } catch (error) {
    console.error("Error creating profile:", error);
  }
};



  return (
    <div className="box bg-gray-900">
      <div className="container">
        <div className="title" style={{ color: "black" }}>
          Setting
        </div>
        <div className="content">
          <div className="image-upload">
            <input type="file" id="file" onChange={handleImageChange} />
            <label htmlFor="file" className="image-upload-label">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Upload"
                  className="uploaded-image"
                />
              ) : (
                <span>Upload your image</span>
              )}
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your number"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Old Password</span>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Enter your old password"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Confirm your password"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="Male"
                onChange={handleInputChange}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                value="Female"
                onChange={handleInputChange}
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="Prefer not to say"
                onChange={handleInputChange}
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
