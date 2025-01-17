import { useParams } from "react-router-dom";

function useStep() {
  const params = useParams();

  // string으로 받아올 수 있기 때문에 parseInt 함수 사용
  return parseInt(params.step);
}

export default useStep;
