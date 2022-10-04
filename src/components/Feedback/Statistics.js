import React from "react";
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div >
            <ul className={css.feedbackStatisticList}>
                <li className={css.statisticListItem}>Good: {good}</li>
                <li className={css.statisticListItem}>Neutral: {neutral}</li>
                <li className={css.statisticListItem}>Bad: {bad}</li></ul>
            <p className={css.total}>Total: {total}</p>
            <p className={css.positive}>Positive feedback: {positivePercentage ? positivePercentage : 0}%</p>
        </div>
          
}
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
export default Statistics