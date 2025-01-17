import { any } from "prop-types";
import styled from "styled-components";

import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

QuestionBox.propTypes = {
  question: any,
  questionsLength: any,
  step: any,
  answer: any,
  setAnswer: any,
};

export default QuestionBox;
