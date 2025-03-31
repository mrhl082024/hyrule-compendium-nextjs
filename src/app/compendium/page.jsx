"use client";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useContext } from "react";
import { Context } from "../ContextWindow.jsx";

export default function Compendium() {
  const { data } = useContext(Context);

  return (
    <>
      <Header />
      <div>compendium test</div>
      <Footer />
    </>
  );
}
