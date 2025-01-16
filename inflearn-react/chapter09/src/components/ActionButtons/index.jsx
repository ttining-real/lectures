import { any } from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
}

ActionButtons.propTypes = {
  questionsLength: any,
  step: any,
};

export default ActionButtons;
