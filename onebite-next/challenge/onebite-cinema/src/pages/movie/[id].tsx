// import { useRouter } from "next/router";
import style from "./[id].module.css";

const mockData = {
  id: 1275096,
  title: "사랑의 하츄핑",
  releaseDate: "2024-08-07",
  company: "SAMG Animation",
  genres: ["애니메이션", "가족", "모험"],
  subTitle: "너와 나의 첫번째 이야기",
  description:
    "인생의 소울메이트를 꼭 만나길 바라는 로미. 우연한 기회에 하츄핑을 처음 본 뒤, 운명의 인연임을 알아본다. 로미는 하츄핑을 찾기 위해 반대를 무릅쓰고 새로운 길을 떠나지만, 마침내 만나게 된 하츄핑은 인간과의 소통을 거부하는데…",
  runtime: 86,
  posterImgUrl:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/52pyvvUJsn4Z3yEQhlCmzlzCCBm.jpg",
};

export default function Page() {
  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = mockData;

  // const router = useRouter();
  // const { id } = router.query;
  // return <h1>{id} 영화 상세페이지</h1>;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl})` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.optional}>
        {releaseDate} | {genres} | {runtime}분
      </div>
      <div className={style.optional}>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
