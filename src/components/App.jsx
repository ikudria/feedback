import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';
import Section from './Feedback/Section/Section';

const options = [
  {
    tag: 'good',
  },
  {
    tag: 'neutral',
  },
  {
    tag: 'bad',
  },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  // handlePositiveFeedback = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutralFeedback = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleNegativeFeedback = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  handleClick = e => {
    const { name } = e.target;
    console.log(e.target);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const counters = Object.values(this.state);
    return counters.reduce((acc, counter) => {
      return (acc += counter);
    }, 0);
  }
  countPositiveFeedback() {
    const sum = this.countTotalFeedback();
    return Math.ceil((this.state.good / sum) * 100);
  }

  render() {
    return (
      <div
        style={{
          padding: '30px',
          width: '60%',
          backgroundColor: 'rgb(242, 238, 234)',
          margin: '30px auto',
          padding: '30px',
          boxShadow: '5px 5px 15px 5px #A5C7C1',
        }}
      >
        <Section title="We appreciate your feedback..." />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleClick}
          // onPositive={this.handlePositiveFeedback}
          // onNeutral={this.handleNeutralFeedback}
          // onNegative={this.handleNegativeFeedback}
        />
        <Section title="Statistics" />
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            ratio={this.countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </div>
    );
  }
}

export default App;
