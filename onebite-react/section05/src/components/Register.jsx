import { useState, useRef } from "react";

// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{ display: "flex", flexFlow: "column", alignItems: "flex-start" }}
    >
      <input
        type='text'
        placeholder='이름'
        name='name'
        value={input.name}
        onChange={onChange}
      />
      {input.name}
      <input type='date' name='birth' value={input.birth} onChange={onChange} />
      {input.birth}
      <select id='' name='country' value={input.country} onChange={onChange}>
        <option value=''></option>
        <option value='kr'>한국</option>
        <option value='us'>미국</option>
        <option value='uk'>영국</option>
      </select>
      {input.country}
      <textarea
        id=''
        name='bio'
        value={input.bio}
        onChange={onChange}
      ></textarea>
      {input.bio}
    </div>
  );
};

export default Register;
