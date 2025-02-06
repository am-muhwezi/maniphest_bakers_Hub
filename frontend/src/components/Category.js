/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import { motion } from 'framer-motion';
//import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';

const Category = ({ data }) => (
  <div className="categoryContainer" data-testid="Category">
    <div className="categoryImage">
      <img src={data.image} alt="/" />
    </div>
    <div>
      <h1>{data.category}</h1>
    </div>
    <div>
      <motion.button whileHover={{ scale: 1.05 }}>
        VIEW ALL
        <BsArrowRight />
      </motion.button>
    </div>
  </div>
);

// Category.propTypes = {
//   data: PropTypes.shape({
//     image: PropTypes.string,
//     category: PropTypes.string,
//   }),
// };

export default Category;