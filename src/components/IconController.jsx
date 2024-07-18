import { Smile } from "lucide-react";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { useEffect } from "react";
import { useContext } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem('value'))
  const [icon, setIcon] = useState(storageValue?storageValue?.icon : "smile")
  const [size, setSize] = useState(storageValue?storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate:0);
  const [color, setColor] = useState(storageValue?storageValue?.color : "#fff");
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)
  useEffect(() =>{
        const updateValue = {
          ...storageValue,
          iconSize: size,
          iconRotate : rotate,
          iconColor : color,
          icon: icon
        }
        setUpdateStorage(updateValue)
        localStorage.setItem('value', JSON.stringify(updateValue ))

      }, [size, rotate, color, icon])

  return (
    <div className="bg-white">
      <div>
       <IconList selectedIcon = {(icon) => setIcon(icon)}/>
        <div className="py-2">
          <label className="py-2 flex justify-between items-center">
            Size <span>{size}px</span>{" "}
          </label>
          <Slider
            className="bg-gray-100"
            defaultValue={[size]}
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
            defaultValue={[rotate]}
            max={360}
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
