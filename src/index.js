import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import './App'
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Blog,
  blog,
  Posts,
  Post
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />}>
      <Route path="" element={<Posts />} />
      <Route path="" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,


  document.getElementById("root")
);

serviceWorker.unregister();
