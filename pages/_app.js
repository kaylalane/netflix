import "styles/globals.scss";
import Layout from "../components/layout";
import React from "react";
// Import the functions you need from the SDKs you need

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
