import React from 'react';
import PropTypes from 'prop-types'; 
import s from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <div className={s.container}>
 { options.map(({ tag }) => (
    <button className={s.button} type="button" name={tag} onClick={onLeaveFeedback} key={tag} >
      {tag}
    </button>
    ))}
    </div>
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

// const FeedbackOptions = ({ onPositive, onNeutral, onNegative }) => (
//   <>
//     <h2 className={s.title}>We appreciate your feedback</h2>
//     <div className={s.container}>
//       <button className={s.button} type="button" onClick={onPositive}>
//         Good
//       </button>
//       <button className={s.button} type="button" onClick={onNeutral}>
//         Neutral
//       </button>
//       <button className={s.button} type="button" onClick={onNegative}>
//         Bad
//       </button>
//     </div>
//   </>
// );
