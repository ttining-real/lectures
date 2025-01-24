import { any } from "prop-types";
import styled from "styled-components";

function TextInput({ answer = "", setAnswer, options }) {
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

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 18px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

TextInput.propTypes = {
  answer: any,
  setAnswer: any,
  options: any,
};

export default TextInput;
