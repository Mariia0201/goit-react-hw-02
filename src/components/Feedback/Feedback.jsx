

function Feedback({ feedbackTypes, totalFeedback, positivePercentage }) {
  const { good, neutral, bad } = feedbackTypes;

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
