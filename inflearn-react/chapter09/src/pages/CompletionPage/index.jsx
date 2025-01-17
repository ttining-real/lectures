import { useRecoilValue } from "recoil";
import styled from "styled-components";

import testWithComma from "@/stores/test/testWithComma";

function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: 4em;
`;

export default CompletionPage;
