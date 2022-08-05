import React from 'react';
import PropTypes from 'prop-types'; 
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, ratio }) => (
   
    <>
    {/* <h2 className={s.title}>Statistics:</h2> */}
    <div className={s.container}>
      <p className={s.rate}>
        Good: <span className={s.count}>{good}</span>
      </p>
      <p className={s.rate}>
        Neutral: <span className={s.count}>{neutral}</span>
      </p>
      <p className={s.rate}>
        Bad: <span className={s.count}>{bad}</span>
      </p>
    </div>
    <p className={s.total}>
            Total: <span className={s.count}>{total}</span>
    </p>
    <p className={s.ratio}>
      Positive feedback: <span className={s.count}>{ratio}%</span>
    </p>
    </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  ratio: PropTypes.number,

}


export default Statistics;
