import { useState } from 'react';

// * 회원가입 폼

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

function Register() {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [contry, setContry] = useState('');
  const [bio, setBio] = useState('');

  const onChangeName = (e) => {
    // console.log(e);
    // e.target.value
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeContry = (e) => {
    setContry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type={'text'}
          placeholder={'이름'}
          value={name}
          onChange={onChangeName}
        />
        {name}
      </div>
      <div>
        <input type="date" value={birth} onChange={onChangeBirth} />
      </div>
      <div>
        <select name="" id="" value={contry} onChange={onChangeContry}>
          <option></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
        {contry}
      </div>
      <div>
        <textarea name="" id="" value={bio} onChange={onChangeBio}></textarea>
        {bio}
      </div>
    </>
  );
}

export default Register;
