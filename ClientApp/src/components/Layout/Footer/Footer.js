import React from 'react';
const Footer = (props) => {
    props.log.info("Footer component rendered");
    return (
<footer>&copy;2018 {props.companyName}</footer>
)};

export default Footer;