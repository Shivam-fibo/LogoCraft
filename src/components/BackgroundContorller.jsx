import React,{useState} from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useEffect } from "react";
import { useContext } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
const BackgroundContorller = () => {
  const storageValue = JSON.parse(localStorage.getItem('value'))
  const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded : 0);
  const[padding, setPadding] = useState(storageValue?storageValue?.bgPadding : 0);
  const[color, setColor] = useState(storageValue?storageValue?.bgColor : '#fff')
  const{updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)


    useEffect(() =>{
      const updateValue = {
        ...storageValue,
        bgRounded: rounded,
        bgPadding: padding,
        bgColor : color
      }
      setUpdateStorage(updateValue)
      localStorage.setItem('value', JSON.stringify(updateValue))
    }, [rounded, color, padding])
  return (
    <div>
      <div className="py-2">
        <label className="py-2 flex justify-between items-center">
          Rounded <span>{rounded} </span>{" "}
        </label>
        <Slider
          className="bg-gray-100"
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(e) => setRounded(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="py-2 flex justify-between items-center">
          Padding <span>{padding} </span>{" "}
        </label>
        <Slider
          className="bg-gray-100"
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(e) => setPadding(e[0])}
        />
      </div>
      <div className="py-2">
          <label className="py-2 flex justify-between items-center">
            Color Picker
          </label>
          <ColorPickerController
            hideController={false}
            selectedColor={(color) => setColor(color)}
          />
        </div>
    </div>
  );
};

export default BackgroundContorller;
