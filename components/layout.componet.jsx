import Head from "next/head";
import { Navbar } from "./Navbar.component";
import { Footer } from "./Footer.component";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Elite Apps</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
