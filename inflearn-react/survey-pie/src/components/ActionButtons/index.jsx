import { any } from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "@/hooks/useAnswers";
import useRequiredOption from "@/hooks/useRequiredOption";
import useStep from "@/hooks/useStep";
import useSurveyId from "@/hooks/useSurveyId";
import postAnswers from "@/services/postAnswers";
import questionsLengthState from "@/stores/survey/questionsLengthState";

import Button from "../Button";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const questionsLength = useRecoilValue(questionsLengthState);
  const isRequired = useRequiredOption();

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type='SECONDARY'
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
            setIsPosting(true);
            // postAnswer
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`); // 완료 페이지로 이동
              })
              .catch((err) => {
                console.log(err.response);
                alert("에러가 발생했습니다. 다시 시도해주세요.");
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? "제출 중 입니다..." : "제출"}
        </Button>
      ) : (
        <Button
          type='PRIMARY'
          onClick={() => {
            navigate(`${step + 1}`); // 완료 페이지로 이동
          }}
          disabled={isBlockToNext}
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
