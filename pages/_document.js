import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
          rel="stylesheet"
        />

        {/* <!-- Template CSS Files --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/jquery.animatedheadline.css"
        />
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
