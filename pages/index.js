import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import react, { useState, useEffect } from 'react'

import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from "../components/Landing"
import Header from "../components/Header"
import Footer from "../components/Footer"

import SearchContext from "../components/Search/context"
import { useSearch } from "../hooks/useSearch"


export default function Home() {

  const [response, setResponse] = useState([])

  const searchText = useSearch()

  const img = response.Poster

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
