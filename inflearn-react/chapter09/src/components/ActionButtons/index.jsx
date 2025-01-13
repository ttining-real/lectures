import { useNavigate } from "react-router-dom";

function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate("/done"); // 완료 페이지로 이동
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`); // 완료 페이지로 이동
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
