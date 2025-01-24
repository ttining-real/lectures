import { useRecoilValue } from "recoil";
import styled from "styled-components";

import Bar from "@/components/Bar";
import useAnswers from "@/hooks/useAnswers";
import useStep from "@/hooks/useStep";
import questionsLengthState from "@/stores/survey/questionsLengthState";

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];

  for (let i = 0; i < length; i++) {
    // debugger;
    let status = "pending";

    if (i === step) {
      status = "in-progress";
    } else if (answers[i]) {
      status = "done";
    }
    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: calc(100% - 120px);
`;

const PageCount = styled.div`
  margin-left: 8px;
  font-size: 16px;
  color: #636262;

  span {
    color: #121111;
    font-weight: bold;
  }
`;

export default ProgressIndicator;
