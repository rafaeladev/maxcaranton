// React
import React, { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";

// API
import { getContent } from "../api/apiGoogle";

// Components
const Nav = React.lazy(() => import("./Nav.tsx"));
const Banner = React.lazy(() => import("./Banner"));
const Footer = React.lazy(() => import("./Footer"));

// Contexte
import { useContentContext } from "../utils/ContentContext";

// Loader
import { FadeLoader } from "react-spinners";

function LoadingBar() {
  return (
    <div
      className="loading-bar"
      style={{
        textAlign: "center",
        padding: "20px",
        width: "100%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeLoader color="#f05a5e" />
    </div>
  );
}

function Layout() {
  const { setSiteData } = useContentContext();

  useEffect(() => {
    const getpageContent = async () => {
      try {
        const content = await getContent("AllData");
        setSiteData(content);
      } catch (error) {
        console.error(error);
      }
    };

    getpageContent();
  }, [setSiteData]);

  return (
    <main>
      <Suspense fallback={<LoadingBar />}>
        <Nav />
        <div className="banner">
          <Banner />
        </div>
        <Outlet />
        <Footer />
      </Suspense>
    </main>
  );
}

export default Layout;
