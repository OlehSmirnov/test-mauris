import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AllShows from "./components/AllShows"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<div>Page doesn't exist!</div>}/>
      <Route path="/" element={<App/>}/>
      <Route path="shows" element={<AllShows/>}/>
    </Routes>

  </BrowserRouter>
)
