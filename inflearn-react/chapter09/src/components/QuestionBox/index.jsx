import { any } from "prop-types";

import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}

QuestionBox.propTypes = {
  question: any,
  questionsLength: any,
  step: any,
  answer: any,
  setAnswer: any,
};

export default QuestionBox;
