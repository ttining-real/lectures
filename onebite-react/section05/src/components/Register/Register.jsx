import { useState, useRef } from 'react';

// * 회원가입 폼

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

function Register() {
  // 하나의 state로 관리하기
  const [input, setInput] = useState({
    name: '',
    birth: '',
    contry: '',
    bio: '',
  });
  // console.log(input);

  const countRef = useRef(0);
  // console.log(countRef.current);
  const inputRef = useRef();

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);

    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type={'text'}
          placeholder={'이름'}
          name="name"
          value={input.name}
          onChange={onChange}
        />
        {input.name}
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select id="" name="contry" value={input.contry} onChange={onChange}>
          <option></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
        {input.contry}
      </div>
      <div>
        <textarea
          id=""
          name="bio"
          value={input.bio}
          onChange={onChange}
        ></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>버튼</button>
    </>
  );
}

export default Register;
