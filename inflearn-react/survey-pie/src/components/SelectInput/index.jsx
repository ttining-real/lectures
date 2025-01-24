import { any } from "prop-types";
import styled from "styled-components";

// Item
function Item({ children, checked, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange} />
        <span></span>
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  label {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border-radius: 24px;
    border: 3px solid #e2dfdf;
  }

  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
  }
  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

Item.propTypes = {
  children: any,
  checked: any,
  onChange: any,
};

// SelectInput
function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    // console.log("answer", answer, index, isChecked);

    if (isChecked) {
      const max = options?.max ?? 1;
      // console.log(max, answer);

      if (answer.length >= max) {
        return;
      }

      // setAnswer (index +)
      setAnswer([...answer, index]);
    } else {
      // setAnswer (index -)
      setAnswer(answer.filter((item) => item !== index));
    }
  };
  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            checked={answer.includes(index)}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
`;

SelectInput.propTypes = {
  answer: any,
  setAnswer: any,
  options: any,
};

export default SelectInput;
