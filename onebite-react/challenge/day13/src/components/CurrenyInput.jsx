const CurrenyInput = ({ current, value, onChange }) => {
  return (
    <div>
      <label htmlFor=''>{current}</label>
      <input
        type='number'
        value={value}
        onChange={(e) => onChange(current, e.target.value)}
      />
    </div>
  );
};

export default CurrenyInput;
