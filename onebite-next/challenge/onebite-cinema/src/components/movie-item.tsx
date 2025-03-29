import type { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`}>
      <img src={posterImgUrl} alt={title} className={style.movieItemImg} />
    </Link>
  );
}
