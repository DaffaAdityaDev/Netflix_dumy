import React from "react";
import Landing from "../components/Landing"
import Header from "../components/Header"
import Footer from "../components/Footer"

import SearchContext from "../components/Search/context"
import { useSearch } from "../hooks/useSearch"


export default function Home() {

  const searchText = useSearch()

  return (
    <div className="background-app">
            <SearchContext.Provider value={searchText}>
                <Header />
                <Landing />
            </SearchContext.Provider>
            <Footer />
    </div>
  )
}
