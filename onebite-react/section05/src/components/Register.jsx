import { useState } from "react";

// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    // console.log(e);
    // e.target.value;
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexFlow: "column", alignItems: "flex-start" }}
    >
      <input
        type='text'
        placeholder='이름'
        value={name}
        onChange={onChangeName}
      />
      {name}
      <input type='date' value={birth} onChange={onChangeBirth} />
      {birth}
      <select name='' id='' value={country} onChange={onChangeCountry}>
        <option value=''></option>
        <option value='kr'>한국</option>
        <option value='us'>미국</option>
        <option value='uk'>영국</option>
      </select>
      {country}
      <textarea name='' id='' value={bio} onChange={onChangeBio}></textarea>
      {bio}
    </div>
  );
};

export default Register;
