import { Suspense } from "react";

import ProgressIndicator from "@/components/ProgressIndicator";
import QuestionBox from "@/components/QuestionBox";

function SurveyPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ProgressIndicator />
      <QuestionBox />
    </Suspense>
  );
}

export default SurveyPage;
