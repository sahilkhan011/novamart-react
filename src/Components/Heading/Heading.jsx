import styles from "./heading.module.css";

/* eslint-disable react/prop-types */
const Heading = (props) => {
  return (
    <div className={`${styles.title}`}>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Heading;
