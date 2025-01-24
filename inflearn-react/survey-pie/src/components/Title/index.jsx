import { any } from "prop-types";
import styled from "styled-components";

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q. </span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  margin: 0px;
  font-family: "Pretendard", "Arial", serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #121111;

  span {
    margin-right: 12px;
  }
`;

Title.propTypes = {
  children: any,
};

export default Title;
