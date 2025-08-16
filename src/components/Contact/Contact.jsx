import React from "react";
import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-header">Contact Information</h2>
      <div>
        <h3>
          {" "}
          <FaPhone /> Phone:12345577
        </h3>
        <h3>
          {" "}
          <MdOutlineMailOutline /> Email:user@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default Contact;
