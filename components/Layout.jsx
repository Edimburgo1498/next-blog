import React from "react";
import Head from "next/Head";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>HOLA MUNDO</header>
      <main>{children}</main>
      <footer>Adios Mundo</footer>
    </>
  );
}

Layout.defaultProps = {
    title : "Algun titulo:"
};
