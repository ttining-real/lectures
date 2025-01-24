import { any } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "@/hooks/useAnswers";
import useStep from "@/hooks/useStep";
import useSurveyId from "@/hooks/useSurveyId";
import postAnswers from "@/services/postAnswers";
import questionsLengthState from "@/stores/survey/questionsLengthState";

import Button from "../Button";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionsLength = useRecoilValue(questionsLengthState);

  const isLast = questionsLength - 2 === step;

  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type='TERTIARY'
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type='PRIMARY'
          onClick={() => {
            // postAnswer
            postAnswers(surveyId, answers);
            navigate("/done"); // 완료 페이지로 이동
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type='PRIMARY'
          onClick={() => {
            navigate(`${step + 1}`); // 완료 페이지로 이동
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 72px 0 0 0;
`;

ActionButtons.propTypes = {
  questionsLength: any,
  step: any,
};

export default ActionButtons;
