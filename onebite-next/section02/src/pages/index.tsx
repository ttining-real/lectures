// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import { InferGetServerSidePropsType } from "next";

// 페이지 역할을 하는 컴포넌트보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수
// 마운트 시점에 한 번만 실행된다. (오직 서버 측에서만 실행)
export const getServerSideProps = () => {
  // 서버 측에서만 실행되기 때문에 터미널에서 확인 가능
  // window.location;
  // 브라우저 메서드는 사용할 수 없다.
  console.log("서버 사이드 프롭스");

  const data = "hello";

  // getServerSideProps 함수의 리턴값은 props라는 객체 프로퍼티를 포함하는 단 하나의 객체여야 한다.
  return {
    props: {
      data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  // SSR이기 때문에 window 객체 사용 불가
  // window.location;

  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// 레이아웃 추가
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
