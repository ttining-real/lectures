import { atom } from "recoil";

const questionsState = atom({
  key: "questionsState",
  default: [
    {
      title: "첫 번째 질문입니다.",
      desc: "첫 번째 설명입니다.",
      type: "text",
      required: false,
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "두 번째 질문입니다.",
      desc: "두 번째 설명입니다.",
      type: "textarea",
      required: true,
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "세 번째 질문입니다.",
      desc: "세 번째 설명입니다.",
      type: "select",
      required: false,
      options: {
        items: ["답변 1", "답변 2", "답변 3", "답변 4", "답변 5"],
      },
    },
  ],
});

export default questionsState;
