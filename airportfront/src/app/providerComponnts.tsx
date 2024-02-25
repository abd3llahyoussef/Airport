"use client";
import NavBar from "./navbar/page";
import Book from "./book/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <Book />
        <Footer />
      </div>
    </main>
  );
}
