import React from "react";
import HeaderFooter from "../header-footer/header-footer";
import Movies from "../movies/movies";

function Main() {
  return (
    <main>
      <HeaderFooter props={{ header: true }}/>
      <Movies />
      <HeaderFooter props={{ footer: true }}/>
    </main>
  );
}

export default Main;
