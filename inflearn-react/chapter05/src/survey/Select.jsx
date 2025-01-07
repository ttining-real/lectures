import { string, func, array } from "prop-types";

function Select({ value, setValue, options = [] }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value='' disabled>
        지역을 선택해주세요.
      </option>
      {options.map((item) => (
        <option key={item} value={item.value}>
          {item}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  value: string,
  setValue: func,
  options: array,
};

export default Select;
