import { Smile } from "lucide-react";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { useEffect } from "react";
import { useContext } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const IconController = () => {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)
  const storageValue = JSON.parse(localStorage.getItem('value'))
  useEffect(() =>{
        const updateValue = {
          ...storageValue,
          iconSize: size,
          iconRotate : rotate,
          iconColor : color,
          icon: 'Smile'
        }
        setUpdateStorage(updateValue)
        localStorage.setItem('value', JSON.stringify(updateValue ))

      }, [size, rotate, color])

  return (
    <div className="bg-white">
      <div>
        <label>Icon</label>
        <div
          className="p-4 bg-gray-200 cursor-pointer w-[50px] h-[50px]
           flex items-center justify-center rounded-md"
        >
          <Smile />
        </div>
        <div className="py-2">
          <label className="py-2 flex justify-between items-center">
            Size <span>{size}px</span>{" "}
          </label>
          <Slider
            className="bg-gray-100"
            defaultValue={[280]}
            max={512}
            step={1}
            onValueChange={(e) => setSize(e[0])}
          />
        </div>
        {/* rotate */}
        <div className="py-2">
          <label className="py-2 flex justify-between items-center">
            Rotate <span>{rotate} °</span>{" "}
          </label>
          <Slider
            className="bg-gray-100"
            defaultValue={[0]}
            max={100}
            step={1}
            onValueChange={(e) => setRotate(e[0])}
          />
        </div>
        <div className="py-2">
          <label className="py-2 flex justify-between items-center">
            Color Picker
          </label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
