// import React from 'react'
//  import Navbar from '../components/Navbar'

//  const Home = () => {
//    return (
//      <div>
//          <h1>Home</h1>
//      </div>
//    )
//  }


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { TbMessageCircle } from 'react-icons/tb';
//import io from 'socket.io-client';
import { BiChevronDownCircle } from 'react-icons/bi';
import Category from '../components/Category';
import { categoryProducts, Latestproducts } from '../components/Constants';

import image from '../assets/images/Baker making bread.jpg';
import food from '../assets/images/Maniphest Bakers Hub Logo.png';
import electronics from '../assets/images/Wedding cake.jpg';
import alcohol from '../assets/images/Dessert Cakes.jpg';
import shoe from '../assets/images/Birthday Cake.jpeg';
import '../css/Home.css';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import SliderComponent from '../components/SliderComponent';
//import ChatPage from '../components/Chat/chatPage';

const Home = () => {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => {
  //   if (showShow && notificationCount > 0) {
  //     setNotificationCount(0);
  //   }
    setShowShow(!showShow);
  };

  // const [notificationCount, setNotificationCount] = useState(0);
  const { userInfo } = useSelector((state) => state.user);
  const fullName = userInfo?.userData?.fullname;
  // const socket = io.connect('https://team-furebo-e-commerce-bn.onrender.com');
  // useEffect(() => {
  //   if (fullName !== '') {
  //     socket.emit('new-user', fullName);
  //     socket.on('user-connected', (name) => {
  //     });
  //     socket.on('chat-message', (data) => {
  //       if (userInfo && data.name !== fullName) {
  //         setNotificationCount((prevCount) => prevCount + 1);
  //       }
  //     });
  //   }
  // }, [fullName]);
  const slides = [
    <div key={1} className="main">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions</span>
          {' '}
          To Boost your brand name and sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={image} alt="/" />
      </div>
    </div>,
    <div key={2} className="main2">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions</span>
          {' '}
          To Boost your brand name and sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={electronics} alt="/" />
      </div>
    </div>,
    <div key={3} className="main">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions</span>
          {' '}
          To Boost your brand name and sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={food} alt="/" />
      </div>
    </div>,
    <div key={3} className="main4">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions</span>
          {' '}
          To Boost your brand name and sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={alcohol} alt="/" />
      </div>
    </div>,
    <div key={3} className="main5">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions</span>
          {' '}
          To Boost your brand name and sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={shoe} alt="/" />
      </div>
    </div>,
  ];
  return (
    <motion.div
      className="homePage"
      data-testid="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showShow && userInfo && (
      <div className="chatDiv" style={{ display: 'block', zIndex: 100 }} >
        <ChatPage className="chatPage" />
        <div data-testid="chat-header-hide" id="team-chat" className="animated slideInUp right banner-maximized" style={{ display: 'block' }} onClick={toggleShow} >
          <div className="pageHolder banner-4 round-banner" style={{ color: 'rgb(255, 255, 255)', background: '#131921' }}>
            <BiChevronDownCircle style={{ color: 'rgb(255, 255, 255)' }} />
          </div>
        </div>
      </div>
      )}

      {!showShow && userInfo && (
      <div  data-testid="chat-header" id="team-chat" className="animated slideInUp right banner-maximized ChatShow" style={{ display: 'block', zIndex: 100 }} onClick={toggleShow} >
        <div className="pageHolder banner-4 round-banner" style={{ color: 'rgb(255, 255, 255)', background: '#131921' }}>
          <TbMessageCircle style={{ color: 'rgb(255, 255, 255)', transform: 'scaleX(-1)' }} />
        </div>
        {/* {notificationCount > 0 && (
        <div className="notification-counter" data-testid="notification-counter" />
        )} */}
      </div>
      )}
      <div className="mainRight">
        <img className='logo-main' src={food} alt="/" />
      </div>
      <div className="categorySection">
        <div className="cotegoryHeader">
          <h1>Browse Our Categories</h1>
          <p>Discover a wide range of products to suit your needs,
            from fashion and electronics to home decor and more.
            Shop with ease at Team-Furebo-E-commerce.
          </p>
        </div>
        <div className="cotegoryBody">
          {categoryProducts.map((cat) => (
            <Category key={cat.id} data={cat} />
          ))}
        </div>
      </div>
      <div className="latestProducts">
        <div className="latestProductHeader">
          <h1>Latest Products</h1>
          <hr />
        </div>
        <div className="latestProductsBody">
          {Latestproducts.map((pr) => (
            <ProductCard key={pr.id} data={pr} />
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </motion.div>
  );
};

// Category.propTypes = {
//   data: PropTypes.shape({
//     image: PropTypes.string,
//     category: PropTypes.string,
//   }),
// };

export default Home;

