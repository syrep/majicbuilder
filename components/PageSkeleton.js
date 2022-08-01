import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function PageSkeleton({ children, nav_h1, tab_title }) {
  return (
    <div className="page-skeleton">
      <Head>
        <title>{tab_title || "Default Tab Title"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        {/* Maybe need below? */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Navbar nav_h1={nav_h1} />
      {children}
      <Footer />
    </div>
  );
}
