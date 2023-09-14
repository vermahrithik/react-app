import React from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Details from "./Components/Details";

const App = () => {
  return (
      <div className="p-5" style={{backgroundColor:"aliceblue",minHeight:"100vh"}}>
          <Nav />
          <hr />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/profile/" element={<Profile />} />   */} 
              {/* here if the route has child routes then leave the path name with open ending */}
              {/*instead of using "/" at the end , like for ex use : path="/home" instead of path="/home/" */}
              <Route path="/profile" element={<Profile />}>
                  <Route path="/profile/:id" element={<Details />} />
              </Route>
          </Routes>
      </div>
  );
};

export default App;