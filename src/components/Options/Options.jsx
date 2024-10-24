import s from "./Options.module.css";

const Options = ({ feedbacks, onClick, totalFeedback }) => {
  const items = [];
  for (let key in feedbacks) {
    items.push(
      <li key={key}>
        <button onClick={onClick} className={s.btn}>
          {key}
        </button>
      </li>
    );
  }

  return (
    <ul className={s.list}>
      {items}{" "}
      {!!totalFeedback && (
        <li key="reset">
          <button onClick={onClick} className={s.btn}>
            reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
