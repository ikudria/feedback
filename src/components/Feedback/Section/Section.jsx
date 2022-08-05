import React from "react";
import PropTypes from 'prop-types'; 
import s from './Section.module.css'

const Section = ({title}) => {
   return <h2 className={s.title}>{ title}</h2>;
}
 

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Section; 