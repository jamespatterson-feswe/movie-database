import React from "react";
import "./main.scss";
import HeaderFooter from "../header-footer/header-footer";
import Movies from "../movies/movies";

function Main() {
  return (
    <main>
      <HeaderFooter params={{ header: true }} />
      <section className="container">
        <Movies />
      </section>
      <HeaderFooter params={{ footer: true }} />
    </main>
  );
}

export default Main;
