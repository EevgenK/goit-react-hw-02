import s from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbacks }) => {
  console.log(positiveFeedbacks);
  const items = [];
  for (let key in feedbacks) {
    items.push(
      <li key={key}>
        {key}: {feedbacks[key]}
      </li>
    );
  }
  return (
    <ul className={s.box}>
      {items}
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbacks} %</li>
    </ul>
  );
};

export default Feedback;
