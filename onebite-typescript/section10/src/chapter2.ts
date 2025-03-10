/* -------------------------------------------------------------------------- */
/*                                    Pick                                    */
/* -------------------------------------------------------------------------- */

// * Pick<T, K>
// 뽑다, 고르다
// 객체 타입으로부터 특정 프로퍼티를 골라내는 타입

// * 게시글을 의미하는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// * Pick 타입 직접 구현해보기
// 타입 변수 K 제한해주기
// K extends keyof T : 변수 K에 할당할 수 있는 타입은
// T로 들어오는 객체 타입의 key 값을 추출한 유니온 타입의 서브 타입만 들어올 수 있다.
type Pick<T, K extends keyof T> = {
  // 맵드 타입
  // in 연산자 우측에는 string literal로 만든 유니온 타입이 들어와야 한다.
  [key in K]: T[key];
};

// * 옛날 게시글 (tags, thumbnail 기능이 없었을 때)
// Pick 타입을 사용하면, Post 타입에서 title과 content 프로퍼티만 골라낼 수 있다.
// 첫 번째 인수 : 사용할 타입
// 두 번째 인수 : 사용하고 싶은 프로퍼티
// → Post 타입으로부터 title과 content 프로퍼티만 있는 객체 타입을 새롭게 정의한다.
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/* -------------------------------------------------------------------------- */
/*                                    Omit                                    */
/* -------------------------------------------------------------------------- */

// * Omit<T, K>
// 생략하다, 빼다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// * 제목이 없는 게시글
// Pick 타입 사용
// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
//   content: "",
//   tags: [],
//   thumbnailURL: "",
// };

// * Omit 타입 직접 구현해보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 타입 변수 T : Post 타입
// 타입 변수 K : 'title'

// 1단계
// Pick<T, Exclude<keyof T, K>>

// 2단계
// Pick<Post, Exclude<keyof Post, 'title'>>

// 3단계
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>

// Exclude type (유틸리티 타입) (*분산적인 조건부 타입 참고)
// Exclude<1번째 타입 변수, 2번째 타입 변수>
// 1번째 타입 변수에서 2번째 타입 변수를 제거한 타입을 반환하는 타입이다.

// 4단계
// → Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// Omit 타입 사용
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/* -------------------------------------------------------------------------- */
/*                                   Record                                   */
/* -------------------------------------------------------------------------- */

// * Record<K, V>
// 객체 타입을 새롭게 정의할 때,
// 인덱스 시그니처처럼 유연하지만 조금 더 제한적인 객체 타입을 정의하고 싶다면
// Record 타입을 사용할 수 있다. (*실무에서 자주 사용됨)

// * 썸네일 타입
// 썸네일 기능 업그레이드
// 사용자의 화면 크기에 대응할 수 있도록 여러 버전 준비
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// * Record 타입 직접 구현해보기
// extends keyof any
// → 무슨 타입인지 알 수 없지만, 적어도 객체 타입의 키를 추출해놓은 유니온 타입임을 알려준다.
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

// Record<첫 번째 타입 변수, 두 번째 타입 변수>
// 첫 번째 타입 변수 : 객체의 프로퍼티의 key를 유니온으로 받는다.
// 두 번째 타입 변수 : key들의 value 타입을 받는다.
