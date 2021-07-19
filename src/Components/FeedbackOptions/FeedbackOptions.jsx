import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";
function FeedbackOptions({ options, onFeedbackBtnClick }) {
  return (
    <>
      <ul className={css.container}>
        {options.map((option) => (
          <li key={option}>
            <button
              type="button"
              className={css.button}
              onClick={() => onFeedbackBtnClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
