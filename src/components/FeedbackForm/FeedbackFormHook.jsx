import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

 function FeedbackForm() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  //   console.log(options);

  function leaveFeedback(options) {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
    }
  }

  function countTotalFeedback(options) {
    const totalFeedback = Object.values(options).reduce((acc, option) => {
      return acc + option;
    }, 0);
    return totalFeedback;
  }

  function countPositiveFeedbackPercentage(good) {
    return good === 0
      ? 0
      : Math.ceil((good / countTotalFeedback(options)) * 100);
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(options) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(options)}
            positivePercentage={countPositiveFeedbackPercentage(good)}
          />
        )}
      </Section>
    </div>
  );
 }

export default FeedbackForm;
