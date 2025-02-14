import { useParams } from "react-router-dom";

const Edit = () => {
  // /edit/100
  const params = useParams();

  return <div>{params.id}번 일기입니다.</div>;
};

export default Edit;
