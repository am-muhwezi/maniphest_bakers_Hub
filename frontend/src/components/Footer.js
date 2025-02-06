import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsSkype,
} from 'react-icons/bs';
//import paymentOption from '../assets/images/pay.png';
import '../css/Footer.css';

const Footer = () => (
  <div className="footerContainer" data-testid="Footer">
    <div className="footerContainer1">
      <div className="footer1">
        <h1>Team-Furebo Ecommerce Shop</h1>
        <p>
          Eiusmod officia elit adipisicing labore ut est ex aliqua Lorem. Anim
          incididunt pariatur enim amet do labore ad in sunt qui Lorem. Proident
          irure nostrud amet ipsum fugiat quis aliquip quis id non. Ad fugiat
          culpa aliquip occaecat magna esse elit deserunt nisi ad laborum ea do
          incididunt.
        </p>
      </div>
      <div className="footer2">
        <h2>Usefull Links</h2>
        <h3>Home</h3>
        <h3>Products</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
        <h3>SignUp</h3>
      </div>
      <div className="footer3">
        <h2>Our Categories</h2>
        <h3>Electronics</h3>
        <h3>Foods</h3>
        <h3>Alcholl</h3>
        <h3>Clothes</h3>
        <h3>Shoes</h3>
      </div>
      <div className="footer4">
        <h2>Our Contacts</h2>
        <p>
          Excepteur exercitation in fugiat id non eiusmod et esse labore fugiat
          nulla minim.
        </p>
        <h3>
          <AiOutlineMail />
          ecommerceteamfurebo@gmail.com
        </h3>
        <h3>
          <IoMdCall />
          +250788000000/+250789999999
        </h3>
        <div className="socialMedia">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
          <BsSkype />
        </div>
      </div>
    </div>
    <div className="footerContainer2">
      <hr />
      <div className="footerContainer3">
        <div className="copyLight">
          © Copyright 2023 Team-Furebo . All rights reserved.
        </div>
        <div>
          {/* <img src={paymentOption} alt="/" /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;