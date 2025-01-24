import { any } from "prop-types";
import styled from "styled-components";

function TextAreaInput({ answer = "", setAnswer, options }) {
  return (
    <Input
      type='text'
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
    />
  );
}

const Input = styled.textarea`
  width: 100%;
  height: 196px;
  box-sizing: border-box;
  padding: 12px 18px;
  font-size: 18px;
  line-height: 21px;
  resize: none;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

TextAreaInput.propTypes = {
  answer: any,
  setAnswer: any,
  options: any,
};

export default TextAreaInput;
