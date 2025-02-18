import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
import { getStringedDate } from "../util/getStringedDate";

const Diary = () => {
  // /diary/100
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const curDiaryItem = useDiary(params.id);

  // useDiary의 반환값이 undefined일 경우
  if (!curDiaryItem) {
    return <div>데이터 로딩 중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
