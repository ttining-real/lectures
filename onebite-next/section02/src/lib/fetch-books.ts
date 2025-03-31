import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  // 요청 경로
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  // API 호출 코드
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
