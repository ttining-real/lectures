import { useState } from "react";
import { useParams } from "react-router-dom";

import ProgressIndicator from "@/components/ProgressIndicator";
import QuestionBox from "@/components/QuestionBox";

function SurveyPage() {
  const params = useParams();
  // console.log(params); // {surveyId: 'asdf', step: 'asdf'}

  // 질문 데이터
  const questions = [
    {
      title: "첫 번째 질문입니다.",
      desc: "첫 번째 설명입니다.",
      type: "text",
      required: false,
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "두 번째 질문입니다.",
      desc: "두 번째 설명입니다.",
      type: "textarea",
      required: true,
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "세 번째 질문입니다.",
      desc: "세 번째 설명입니다.",
      type: "select",
      required: false,
      options: {
        items: ["답변 1", "답변 2", "답변 3", "답변 4", "답변 5"],
      },
    },
  ];

  // 현재 질문의 인덱스
  // const step = 1;
  const step = parseInt(params.step); // string으로 받아올 수 있기 때문에 parseInt 함수 사용

  const [answers, setAnswers] = useState([]);

  // console.log(answers);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          // console.log(newAnswer);

          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            // console.log(newAnswers);

            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default SurveyPage;
