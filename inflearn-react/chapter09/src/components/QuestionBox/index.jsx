import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import answersState from "@/stores/answers/atom";
import questionsState from "@/stores/questions/atom";

import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox() {
  const params = useParams();
  // console.log(params); // {surveyId: 'asdf', step: 'asdf'}

  // 현재 질문의 인덱스
  // const step = 1;
  const step = parseInt(params.step); // string으로 받아올 수 있기 때문에 parseInt 함수 사용
  const questions = useRecoilValue(questionsState);
  const [answers, setAnswers] = useRecoilState(answersState);

  const question = questions[step];
  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

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
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

export default QuestionBox;
