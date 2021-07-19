import PropTypes from "prop-types";

import css from "./Statistics.module.css";

function Statistics({
  goodFeedbackCounter,
  renderStatisticsItem,
  calculateTotalCount,
}) {
  return (
    <div>
      <ul className={css.statisticWrapper}>
        {renderStatisticsItem()}
        <li className="statistic-item">Total: {calculateTotalCount()}</li>
        <li className="statistic-item">
          Positive Feedback:{" "}
          {goodFeedbackCounter / calculateTotalCount()
            ? Math.floor((goodFeedbackCounter / calculateTotalCount()) * 100) +
              "%"
            : 0 + "%"}
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  goodFeedbackCounter: PropTypes.number.isRequired,
  renderStatisticsItem: PropTypes.func.isRequired,
  calculateTotalCount: PropTypes.func.isRequired,
};

export default Statistics;
