import { useState } from "react";
import "./App.css";
import BackgroundContorller from "./components/BackgroundContorller";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";

function App() {
  const[selectIndex , setSelectIndex] = useState();
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectIndex={(val) => setSelectIndex(val)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen p-4 shadow-sm overflow-auto">
          {selectIndex == 0 ? 
          <IconController/>
          :
          <BackgroundContorller/>
        }
        </div>
        <div className="md:col-span-3 ">
        </div>
        <div className="">
          Ads Banner
        </div>

      </div>
    </>
  );
}

export default App;
