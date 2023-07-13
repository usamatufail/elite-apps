import Head from "next/head";
import { Navbar } from "./Navbar.component";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Elite Apps</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};
