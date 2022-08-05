import React from 'react';
import PropTypes from 'prop-types'; 
import s from './Notification.module.css'

const Notification = ({ message }) => {
  return <h2 className={s.message}>{message}</h2>;
};


Notification.propTypes = {
    message: PropTypes.string,
}
export default Notification;
