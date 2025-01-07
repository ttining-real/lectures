import { string, func } from "prop-types";

function TextInput({ value, setValue }) {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

TextInput.propTypes = {
  value: string,
  setValue: func,
};

export default TextInput;
