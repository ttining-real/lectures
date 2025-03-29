import SearchbarLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import movieData from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.section}>
        <h3 className={style.title}>지금 가장 추천하는 영화</h3>
        <div className={style.column_three}>
          {movieData.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={style.section}>
        <h3 className={style.title}>등록된 모든 영화</h3>
        <div className={style.column_five}>
          {movieData.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
