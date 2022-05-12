import React from "react";
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import FeedbackStats from "components/FeedbackStats/FeedbackStats";

class Feedback extends React.Component {
  state={
    good:0,
    neutral:0,
    bad:0,
  };

  handleIncrement=selected=>{
    this.setState(prevState=>{
      return {[selected]:prevState[selected]+1}
    })
  };

  countTotalFeedback=()=>{
    const {good,neutral,bad}=this.state;

    return good+neutral+bad;
  };

  countPositiveFeedbackPercenatage=()=>{
    const {good}=this.state;

    return good ? `${Math.round((good*100/this.countTotalFeedback())) + '%' }` : 0;

  };
 
  
  render() {
    const {good, neutral, bad}=this.state;

    return(
      <FeedbackSection title="Please leave your feedback">
        <FeedbackOptions
          options={['good','neutral','bad']}
          onClickFeedback={this.handleIncrement}>
        </FeedbackOptions>

        <h2>Statistics</h2>

        {good===0 && bad===0 && neutral===0 ? (<p>There is no feedbacks</p>):
        (<FeedbackStats
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercenatage()}
        />)}


      </FeedbackSection>
    )
  }


}

export default Feedback;
