import MovieItem from "@/components/movie-item";
import SearchbarLayout from "@/components/searchable-layout";
// import { useRouter } from "next/router";
import { ReactNode } from "react";
import style from "./index.module.css";
import movieData from "@/mock/dummy.json";

export default function Page() {
  // const router = useRouter();
  // const { q } = router.query;
  // console.log(q);

  return (
    <div className={style.container}>
      {movieData.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
