import './App.css';
import HomeIndex from "./page/home";
import AboutIndex from "./page/About";

import ContactIndex from "./page/Contact";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/App";
import ErrorIndex from "./page/Error";
import Layout2 from "./Layout/App2";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="" element={<Layout /> } >
          <Route path="/" element={<HomeIndex /> } />
          <Route path="/about" element={ <AboutIndex/> } />
          <Route path="/contact" element={ <ContactIndex/> } />
        </Route>

        <Route path="/home" element={<Layout2 /> } >
          <Route path="/home" element={<HomeIndex /> } />
          <Route path="about" element={ <AboutIndex/> } />
          <Route path="contact" element={ <ContactIndex/> } />
        </Route>

        <Route path="*" element={<ErrorIndex /> } />
      </Routes>
    </div>
  );
}

export default App;
