import "./App.css";

// 1. 이벤트 연결하기
// import EventBinding from "./components/EventBinding";

// 2. 이벤트 종류
// import EventType from "./components/EventType";

// 3. Form (Controlled Component vs Uncontrolled Component)
// import TextInput from "./controlledComponents/TextInput";
// import TextArea from "./controlledComponents/TextArea";
// import Select from "./controlledComponents/Select";
// import CheckBox from "./controlledComponents/CheckBox";
// import UncontrolledTextInput from "./controlledComponents/UncontrolledTextInput";

// 4. 설문조사 만들기
import Select from "./survey/Select";
import TextInput from "./survey/TextInput";
import { useState } from "react";

const contryOptions = ["한국", "중국", "일본", "러시아", "미국"];

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    contry: "",
    address: "",
  });

  console.log("[App] formValue", formValue);

  return (
    <div className='App'>
      {/* <EventBinding /> */}

      {/* <EventType /> */}

      {/* Controlled Component */}
      {/* <div>
        <TextInput />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <CheckBox />
      </div> */}

      {/* Uncontrolled Component */}
      {/* <div>
        <UncontrolledTextInput />
      </div> */}

      {/* 설문조사 만들기 */}
      <div className='form'>
        <div className='form-item'>
          <h1>1. 이름이 무엇인가요?</h1>
          <TextInput
            value={formValue.name}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                name: value,
              }));
            }}
          />
        </div>
        <div className='form-item'>
          <h1>2. 사는 곳은 어딘가요?</h1>
          <Select
            value={formValue.contry}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                contry: value,
              }));
            }}
            options={contryOptions}
          />
        </div>
        {/* (1) 삼항 연산자 */}
        {/* {formValue.contry === "한국" ? (
          <div className='form-item'>
            <h1>2-1. 한국 어디에 사나요?</h1>
            <TextInput
              value={formValue.address}
              setValue={(value) => {
                setFormValue((state) => ({
                  ...state,
                  address: value,
                }));
              }}
            />
          </div>
        ) : null}
         */}

        {/* (2) && 연산자 */}
        {formValue.contry === "한국" && (
          <div className='form-item'>
            <h1>2-1. 한국 어디에 사나요?</h1>
            <TextInput
              value={formValue.address}
              setValue={(value) => {
                setFormValue((state) => ({
                  ...state,
                  address: value,
                }));
              }}
            />
          </div>
        )}

        <div className='button-group'>
          <button
            onClick={() => {
              alert("저장되었습니다.");
              setFormValue({
                name: "",
                contry: "",
                address: "",
              });
            }}
            // disabled={formValue.name === "" || formValue.contry === ""}
            disabled={!formValue.name || !formValue.contry}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
