import React from "react";
import FirstPage from "./component1/FirstPage";
import SecondPage from "./component2/SecondPage";
import ThirdPage from "./component3/ThirdPage";
import FourthPage from "./component4/FourthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import GetMethod from "./fetchingapi/GetMethod";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThirdPage />} />
          <Route path="/fourthPage" element={<FourthPage />} />
        </Routes>
      </BrowserRouter>
      <GetMethod />
    </>
  );
};

export default App;
