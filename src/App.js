import { useState } from "react";

import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";

import "./App.css";

const good = "good";
const neutral = "neutral";
const bad = "bad";

const feedbacks = [good, neutral, bad];

export default function App() {
  const [goodFeedbackCounter, setGoodFeedback] = useState(0);
  const [neutralFeedbackCounter, setNeutralFeedback] = useState(0);
  const [badFeedbackCounter, setBadFeedback] = useState(0);

  const onFeedbackBtnClick = (feedback) => {
    switch (feedback) {
      case good:
        setGoodFeedback((prevState) => prevState + 1);
        break;

      case neutral:
        setNeutralFeedback((prevState) => prevState + 1);
        break;

      case bad:
        setBadFeedback((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const calculateTotalCount = () => {
    return goodFeedbackCounter + neutralFeedbackCounter + badFeedbackCounter;
  };

  const returnStatisticItem = (feedback) => {
    switch (feedback) {
      case good:
        return goodFeedbackCounter;

      case neutral:
        return neutralFeedbackCounter;

      case bad:
        return badFeedbackCounter;

      default:
        return;
    }
  };

  const renderStatisticsItem = () => {
    return feedbacks.map((feedback) => (
      <li key={feedback} className="statistic-item">
        <p className="feedback-name">
          {feedback}: {returnStatisticItem(feedback)}
        </p>
      </li>
    ));
  };
  return (
    <div className="wrapper">
      <Section title="Залиште, будь ласка, свій feedback">
        <FeedbackOptions
          options={feedbacks}
          onFeedbackBtnClick={onFeedbackBtnClick}
        />
      </Section>

      <Section title="Статистика">
        {goodFeedbackCounter > 0 ||
        neutralFeedbackCounter ||
        badFeedbackCounter ? (
          <Statistics
            goodFeedbackCounter={goodFeedbackCounter}
            renderStatisticsItem={renderStatisticsItem}
            calculateTotalCount={calculateTotalCount}
          />
        ) : (
          <Notification message="Not feedback given" />
        )}
      </Section>
    </div>
  );
}

// CLASS APP
// const good = "good";
// const neutral = "neutral";
// const bad = "bad";

// const feedbacks = [good, neutral, bad];

// class App extends React.Component {
//   state = {
//     [good]: 0,
//     [neutral]: 0,
//     [bad]: 0,
//   };

//   onFeedbackBtnClick = (feedback) => {
//     this.setState((prevState) => {
//       return { [feedback]: prevState[feedback] + 1 };
//     });
//   };

//   calculateTotalCount = () => {
//     let totalCountFeddbacks = 0;
//     Object.values(this.state).reduce(
//       (acc, count) => (totalCountFeddbacks = acc + count),
//       0
//     );
//     return totalCountFeddbacks;
//   };

//   renderStatisticsItem = () => {
//     return feedbacks.map((feedback) => (
//       <li key={feedback} className="statistic-item">
//         <p className="feedback-name">
//           {feedback}: {this.state[feedback]}
//         </p>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <div className="wrapper">
//         <Section title="Залиште, будь ласка, свій feedback">
//           <FeedbackOptions
//             options={feedbacks}
//             onFeedbackBtnClick={this.onFeedbackBtnClick}
//           />
//         </Section>

//         <Section title="Статистика">
//           {this.state.good > 0 || this.state.neutral || this.state.bad ? (
//             <Statistics
//               good={this.state.good}
//               renderStatisticsItem={this.renderStatisticsItem}
//               calculateTotalCount={this.calculateTotalCount}
//             />
//           ) : (
//             <Notification message="Not feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
