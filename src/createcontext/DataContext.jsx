import { Children, createContext, useState } from "react";
import FirstPage from "../component1/FirstPage";
import SecondPage from "../component2/SecondPage";
import ThirdPage from "../component3/ThirdPage";
import FourthPage from "../component4/FourthPage";

export const Context = createContext("");
console.log(Context);

const DataContext = ({ children }) => {
  const [gettingAllData, setGettingAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState("firstPage");

  return (
    <div>
      {currentPage === "firstPage" && (
        <FirstPage
          gettingAllData={gettingAllData}
          setGettingAllData={setGettingAllData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "secondPage" && (
        <SecondPage
          gettingAllData={gettingAllData}
          setGettingAllData={setGettingAllData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {/* <ThirdPage
        gettingAllData={gettingAllData}
        setGettingAllData={setGettingAllData}
      /> */}
      {currentPage === "fourthPage" && (
        <FourthPage
          gettingAllData={gettingAllData}
          setGettingAllData={setGettingAllData}
          setCurrentPage={setCurrentPage}
        />
      )}
      <Context.Provider value={{ gettingAllData, setGettingAllData }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default DataContext;
