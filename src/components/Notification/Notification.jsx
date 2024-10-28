import s from "./Notification.module.css";

const Notification = ({ text }) => {
  return <h3 className={s.notification}>{text}</h3>;
};

export default Notification;
