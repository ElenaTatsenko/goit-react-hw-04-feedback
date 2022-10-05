import React from "react";
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div className={css.feedbackOptions}>{
        options.map(option => <button key={option} className={css.feedbackBtn} type="button" onClick={onLeaveFeedback}>{option}</button>)
    }  
    </div >
    
}
    
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions