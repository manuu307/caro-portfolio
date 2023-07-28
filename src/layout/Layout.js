import Head from "next/head";
import { Fragment, memo, useContext } from "react";
import { Context } from "../context/context";
import Preloader from "./Preloader";
import Switcher from "./Switcher";

const Layout = ({ children }) => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <Head>
        <title>Carolina Tapia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href={`css/skins/${color}.css`}
        />

        <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
      </Head>
      <Preloader />
      {/* <Switcher /> */}
      <div className="wrapper">{children}</div>
    </Fragment>
  );
};
export default memo(Layout);
