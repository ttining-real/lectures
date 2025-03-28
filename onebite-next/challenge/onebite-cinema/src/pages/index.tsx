import SearchbarLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
