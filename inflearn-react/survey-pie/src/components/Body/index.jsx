import { any } from "prop-types";
import styled from "styled-components";

import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer, options }) {
  let InputComponent = null;

  if (type === "select") {
    InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    InputComponent = TextAreaInput;
  }

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  flex: 1;
  margin: 0px 40px 0px;
`;

Body.propTypes = {
  type: any,
  answer: any,
  setAnswer: any,
  options: any,
};

export default Body;
