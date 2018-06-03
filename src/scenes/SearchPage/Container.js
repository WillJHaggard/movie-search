import React from "react";
import Search from "./Search";
import { Header, Footer } from "../../components";
import "./SearchPage.css";

const SearchPage = () => (
  <div>
    <div style={{ minHeight: "calc(130vh - 270px)" }}>
      <Header
        content={{
          title: "Movie Search",
        }}
      />
      <Search />
    </div>
    <div>
      <Footer
        content={{
          title: "Try another search.",
          subtitle:
            "Didn't find what you were looking for?",
        }}
      />
    </div>
  </div>
);

export default SearchPage;
