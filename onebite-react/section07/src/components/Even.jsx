import { useEffect } from "react";

function Even() {
  useEffect(() => {
    // 클린업, 정리 함수
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수입니다.</div>;
}

export default Even;
