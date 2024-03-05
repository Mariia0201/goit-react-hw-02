
import Descriptions from './components/Descriptions/Descriptions';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notifications/Notifications';
import { useEffect, useState } from 'react';

function App() {
  const initialFeedbackTypes = JSON.parse(localStorage.getItem('feedbackTypes')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  return (
    <div className="App">
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}

export default App;
