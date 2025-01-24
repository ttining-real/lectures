import { styled } from "styled-components";

import { PRIMARY, SECONDARY, TERTIARY } from "@/constants/color";

// (1)
// color: ${PRIMARY.BUTTON.DEFAULT.COLOR};
// background-color: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};

// (2) 함수로 분리
// function getColor(type1, type2) {
//   if (type1 === "PRIMARY") {
//     return PRIMARY.BUTTON.DEFAULT.COLOR;
//   } else if (type1 === "SECONDARY") {
//     return SECONDARY.BUTTON.DEFAULT.COLOR;
//   }
// }

// color: ${(props) => {
//   return getColor(props.type);
// }};

// (3) map 메서드 사용
const colorMap = {
  PRIMARY, // PRIMARY: PRIMARY 축약
  SECONDARY,
  TERTIARY,
};

// color: ${(props) => {
//   return colorMap[props.type].BUTTON.DEFAULT.COLOR;
// }};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;
  cursor: pointer;
  border-radius: 4px;
  border: ${({ type }) =>
    type === "TERTIARY"
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : "none"};
  font-weight: bold;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : "none"};
  }
  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : "none"};
  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background-color: ${({ type }) =>
      colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : "none"};
  }
`;

export default Button;
