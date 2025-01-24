import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import congratulation from "@/assets/congratulation.png";
import reload from "@/assets/reload.png";
import Button from "@/components/Button";
import useSurveyId from "@/hooks/useSurveyId";

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congratulation} width='209' height='204' />
      <MidText>설문이 완료되었습니다.</MidText>
      <ReloadButton
        type='TERTIARY'
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} width={24} height={24} />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 4em;
`;

const MidText = styled.div`
  margin: 16px 0 56px;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
