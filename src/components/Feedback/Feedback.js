import React from "react";
import FeedbackOptions  from "./FeedbackOptions"
import Statistics  from "./Statistics";
import Section from "./Section";
import Notification from "./Notification"
import css from './Feedback.module.css'



class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleIncrement = e => {
        let option = e.currentTarget.textContent
        this.setState(prevState => ({ [option]: prevState[option] + 1 }))
         
    };
    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);
    
     
    render() {
        return (
            <div className={css.feedback}>
                <Section
                    title="Please leave feedback">
                    <FeedbackOptions
                        onLeaveFeedback={this.handleIncrement}
                        options={Object.keys(this.state)}
                    />
                </Section>

                <Section title="Statistics" className={css.Statistics}>
                    {this.countTotalFeedback() === 0 ? (<Notification message={"There is no feedback"} />) : (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />)}
                </Section>
            
            </div>)};
}

export default Feedback