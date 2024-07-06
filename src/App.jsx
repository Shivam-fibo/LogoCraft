import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectIndex={(val) => console.log(val)} />
      </div>
      <div className="ml-64">Body</div>
    </>
  );
}

export default App;
