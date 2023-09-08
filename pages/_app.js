import React from "react";
import App from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import PageChange from "components/PageChange/PageChange.js";
import { useRouter } from "next/router";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

// Router.events.on("routeChangeStart", (url) => {
//   console.log(`Loading: ${url}`);
//   document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
// Router.events.on("routeChangeComplete", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });
// Router.events.on("routeChangeError", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, session } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <>
        {/*{" "}
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        */}
        <React.Fragment>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Futur Banking</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          
            </Link>
          </Layout>
        </React.Fragment>
      </>
    );
  }
}
