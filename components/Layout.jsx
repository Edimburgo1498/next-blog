import React from "react";
// import Head from "next/Head";

export default function Layout({ children, title }) {
  return (
    <>
      <header>HOLA MUNDO</header>
      <main>{children}</main>
      <footer>Adios Mundo</footer>
    </>
  );
}

Layout.defaultProps = {
    title : "Algun titulo:"
};
      {/* <Head>
        <title>{title}</title>
      </Head> */}
