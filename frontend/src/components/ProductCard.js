/* eslint-disable react/require-default-props */
import React from 'react';
import { motion } from 'framer-motion';
//import PropTypes from 'prop-types';
// import { FaStar } from 'react-icons/fa';

const ProductCard = ({ data }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="latestProductCard" data-testid="ProductCard">
    <div className="productImage">
      <img src={data.image} alt="/" />
    </div>
    <div>
      <h1>{data.title}</h1>
    </div>
    <div>
      <span>
        $
        {data.price}
      </span>
    </div>
    <div className="rating">
      {/* {[...Array(data.rating)].map((index) => (
        <FaStar id={index + 1} key={index + 2} />
      ))} */}
    </div>
  </motion.div>
);

// ProductCard.propTypes = {
//   data: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     rating: PropTypes.number,
//   }),
// };

export default ProductCard;