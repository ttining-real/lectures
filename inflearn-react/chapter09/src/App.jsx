import { useState } from "react";

import ProgressIndicator from "./components/ProgressIndicator/index";
import QuestionBox from "./components/QuestionBox/index";

function App() {
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
  const step = 1;

  const [answers, setAnswers] = useState([]);

  return (
    <div className='App'>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((newAnswer) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;

            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
