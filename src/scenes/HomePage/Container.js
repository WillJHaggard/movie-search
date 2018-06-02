import React from "react";
import Search from "./Search";
import { Header, Footer } from "../../components";

const HomePage = () => (
  <div>
    <div style={{ minHeight: "calc(130vh - 270px)" }}>
      <Navigation />
      <Search />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default HomePage;
