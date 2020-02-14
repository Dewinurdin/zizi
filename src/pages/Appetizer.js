import React from 'react';
import Image from 'react-bootstrap/Image';

import AppetizerMenu from '../images/appetizer.png'

const Appetizer = () => (
    <Image src={AppetizerMenu} className="menu" alt={AppetizerMenu} fluid/>
);

export default Appetizer;