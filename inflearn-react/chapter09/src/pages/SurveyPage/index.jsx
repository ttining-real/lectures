import { useState } from "react";
import { useParams } from "react-router-dom";

import ProgressIndicator from "@/components/ProgressIndicator";
import QuestionBox from "@/components/QuestionBox";

function SurveyPage() {
  const params = useParams();
  console.log(params); // {surveyId: 'asdf', step: 'asdf'}

  // 질문 데이터
  const questions = [
    {
      title: "첫 번째 질문입니다.",
      desc: "첫 번째 설명입니다.",
      type: "text",
      required: false,
      options: {},
    },
    {
      title: "두 번째 질문입니다.",
      desc: "두 번째 설명입니다.",
      type: "text",
      required: true,
      options: {},
    },
    {
      title: "세 번째 질문입니다.",
      desc: "세 번째 설명입니다.",
      type: "text",
      required: false,
      options: {},
    },
  ];

  // 현재 질문의 인덱스
  // const step = 1;
  const step = parseInt(params.step); // string으로 받아올 수 있기 때문에 parseInt 함수 사용

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;

            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default SurveyPage;
