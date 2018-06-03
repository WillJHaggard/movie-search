import React from "react";
import Search from "../../containers/Search";
import { Header, Footer } from "../../components";

const SearchPage = () => (
  <div>
    <div style={{ minHeight: "calc(100vh - 1rem)" }}>
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
