import { useState } from "react";
import "./App.css";
import BackgroundContorller from "./components/BackgroundContorller";
import Header from "./components/Header";
import IconController from "./components/IconController";
import LogoPreview from "./components/LogoPreview";
import SideNav from "./components/SideNav";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <Header DownloadIcon={setDownloadIcon} />
      <div className="w-64 fixed">
        <SideNav selectIndex={(val) => setSelectIndex(val)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen p-4 shadow-sm overflow-auto">
          {selectIndex === 0 ? <IconController /> : <BackgroundContorller />}
        </div>
        <div className="md:col-span-3">
          <LogoPreview downloadIcon={downloadIcon} />
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
