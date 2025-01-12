import TextInput from "../TextInput";

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;

  if (type === "select") {
    // InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
  }

  return (
    <div>
      <InputComponent answer={answer} setAnswer={setAnswer} />
    </div>
  );
}

export default Body;
