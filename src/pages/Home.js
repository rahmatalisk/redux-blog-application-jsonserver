import React, { useState } from "react";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogSideBar from "../components/blogs/BlogSideBar";

const Home = () => {
  const [sortData, setSortData] = useState("default");
  const [toggle, setToggle] = useState(false);
  return (
    <section className="wrapper">
      <BlogSideBar
        setToggle={setToggle}
        toggle={toggle}
        setSortData={setSortData}
      />
      <BlogGrid toggle={toggle} sortData={sortData} />
    </section>
  );
};

export default Home;
