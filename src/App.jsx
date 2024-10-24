import { useEffect, useState } from "react";

import "modern-normalize";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("feedbacks")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    const button = feedbackType.target.textContent.toLowerCase();
    if (button === "reset") {
      setFeedbacks({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setFeedbacks((prevState) => ({
      ...prevState,
      [button]: prevState[button] + 1,
    }));
  };

  return (
    <section>
      <div className="container">
        <Description />
        <Options
          totalFeedback={totalFeedback}
          onClick={updateFeedback}
          feedbacks={feedbacks}
        />

        {totalFeedback ? (
          <Feedback
            positiveFeedbacks={Math.round((good / totalFeedback) * 100)}
            totalFeedback={totalFeedback}
            feedbacks={feedbacks}
          />
        ) : (
          <h3 className="notification">no feedback yet</h3>
        )}
      </div>
    </section>
  );
}

export default App;
