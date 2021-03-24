import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useTransition, animated, config } from "react-spring";

import contentData from "../Data/content.json";
import backgrond1 from "../Data/images/slide_1.jpg";
import backgrond2 from "../Data/images/slide_2.jpg";
import backgrond3 from "../Data/images/slide_3.jpg";
import Nav from "./header/Nav";
import Content from "./content/Content";
import CTA from "./content/CTA";
import Loading from "./Loading";

// Page content
const PageContent = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {/* Space for Nav  */}
      <div style={{ width: "100%", height: "140px" }}></div>
      <Content />
      <CTA />
    </div>
  );
};

// Page background list for react-spring
const pages = [
  ({ style }) => (
    <animated.div
      className="page"
      style={{
        ...style,
        background: `url(${backgrond1}) 0 0 / cover`,
      }}
    >
      <PageContent />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="page"
      style={{
        ...style,
        background: `url(${backgrond2}) 0 0 / cover`,
      }}
    >
      <PageContent />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="page"
      style={{
        ...style,
        background: `url(${backgrond3}) 0 0 / cover`,
      }}
    >
      <PageContent />
    </animated.div>
  ),
];

function Layout() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  useEffect(() => {
    //
    // I can't use axios to get data due to CORS.
    // So I assume loading time is 1.5s
    //
    setTimeout(() => {
      // Store page content data to redux
      dispatch({ type: "LOAD_DATA", payload: contentData });
      setLoading(false);
    }, 1500);

    //
    // Code for using axios get page content
    //
    // async function fetchData() {
    //   const res = await axios(
    //     "https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json",
    //     {
    //       method: "GET",
    //       mode: "no-cors",
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //     }
    //   );
    //   if (res.status === 200) {
    //     dispatch({ type: "LOAD_DATA", payload: res.data });
    //     setLoading(false);
    //   }
    // }
    // fetchData();
  }, []);

  // Background images animation
  const transitions = useTransition(page, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  // Nav container style
  const layoutStyle = {
    position: "absolute",
    width: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="fade-in">
          <div style={layoutStyle}>
            <Nav />
          </div>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item - 1];
            return <Page key={key} style={props} />;
          })}
        </div>
      )}
    </>
  );
}

export default Layout;
