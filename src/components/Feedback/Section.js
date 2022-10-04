import React from "react";
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const Section = ({ children, title }) => {
    return <section className={css.feedbackSection}>
             <h2 className={css.feedbackSectionTitle}>{title}</h2>
             {children}
           </section>
};
   


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    
}

export default Section