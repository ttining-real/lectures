import { useParams } from "react-router-dom";

function useSurveyId() {
  const params = useParams();

  // string으로 받아올 수 있기 때문에 parseInt 함수 사용
  return parseInt(params.surveyId);
}

export default useSurveyId;
