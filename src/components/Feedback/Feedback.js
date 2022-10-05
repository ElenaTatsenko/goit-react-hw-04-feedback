import React from "react";
import FeedbackOptions  from "./FeedbackOptions"
import Statistics  from "./Statistics";
import Section from "./Section";
import Notification from "./Notification"
import css from './Feedback.module.css'
import { useState } from "react";


export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleIncrement = (e) => {
        switch (e.currentTarget.textContent) {
            case 'good':
                setGood(prevState => prevState + 1);
               
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    }
   
    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100);

    const options = Object.keys({ good, neutral, bad });
    
        return (
            <div className={css.feedback}>
                <Section
                    title="Please leave feedback">
                    <FeedbackOptions
                        onLeaveFeedback={handleIncrement}
                        options={options}
                    />
                </Section>

                <Section title="Statistics" className={css.Statistics}>
                    {countTotalFeedback() === 0 ? (<Notification message={"There is no feedback"} />) : (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />)}
                </Section>
            
            </div>)
    }

    
    











//class oldFeedback extends React.Component {
//    state = {
 //       good: 0,
 //       neutral: 0,
 //       bad: 0
 //   }
//    handleIncrement = e => {
 //       let option = e.currentTarget.textContent
  //      this.setState(prevState => ({ [option]: prevState[option] + 1 }))
         
  //  };
  //  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

   // countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);
    
     
    
//}

//const [state, setState] = useState({
      //  good: 0,
       // neutral: 0,
      //  bad: 0,
  //  });
    
 //   const { good, neutral, bad } = state;
 //   const handleIncrement = (e) => {
 //       let option = e.currentTarget.textContent
  //      setState(prevState => ({ [option]: prevState[option] + 1 }))
  //  }
    
  //      const countTotalFeedback = () => {
   //         totalFeedbacks = good + neutral + bad;

   //         return totalFeedbacks
   //     }



    //    const countPositiveFeedbackPercentage = () => {
    //        let positiveFeedbackPercentage = 0;
     //       positiveFeedbackPercentage = Math.round(good / countTotalFeedback() * 100);
     //       return positiveFeedbackPercentage
     //   }

 //switch (e.currentTarget.textContent) {
        //    case 'good':
        //        setState( good, neutral, bad);
        //       
        //        break;
        //    case 'neutral':
        //         setState(prevState => prevState.neutral + 1);
        //         break;
        //    case 'bad':
        //        setState(prevState => prevState.bad + 1);
        //        break;
        //       return;
        // }
    
    
        // const countTotalFeedback = () => good + neutral + bad;

        //   const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100);
    //export default function Feedback() {
//     const [state, setState] = useState({
 //        good: 0,
  //       neutral: 0,
  //       bad: 0,
   //  });
    
    
   // const { good, neutral, bad } = state;
    //console.log(Object.values(state))

    //const handleIncrement = e => {
    //    return setState(({
    //        ...state, ...{ [e.currentTarget.name]: state[e.currentTarget.name] + 1 }
    //    }))
    //}