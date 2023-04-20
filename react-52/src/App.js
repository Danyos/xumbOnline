import './App.css';
import HomeIndex from "./page/home";
import AboutIndex from "./page/About";

import ContactIndex from "./page/Contact";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/App";
import ErrorIndex from "./page/Error";

import BlogIndex from "./page/Blog";
import BlogDetalis from "./page/Blog/BlogDetals";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="" element={<Layout /> } >
          <Route path="/" element={<HomeIndex /> } />
          <Route path="/about" element={ <AboutIndex/> } />
          <Route path="/contact" element={ <ContactIndex/> } />
          <Route path="/blog" element={ <BlogIndex/> } />
          <Route path="/blog/:id" element={ <BlogDetalis/> } />
        </Route>
        <Route path="*" element={<ErrorIndex /> } />
      </Routes>
    </div>
  );
}

export default App;
