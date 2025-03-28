import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>
          <Link href='/'>🍿ONEBITE CINEMA🍿</Link>
        </h1>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>ONEBITE CINEMA</footer>
    </div>
  );
}
