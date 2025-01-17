import { any } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import questionsState from "@/stores/questions/atom";

import Button from "../Button";

function ActionButtons() {
  const params = useParams();
  const step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;

  const isLast = questionsLength - 1 === step;
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
