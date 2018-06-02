import React from "react";
import Search from "./Search";
import { Header, Footer } from "../../components";

const SearchPage = () => (
  <div>
    <div style={{ minHeight: "calc(130vh - 270px)" }}>
      <Header />
      <Search />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default SearchPage;
