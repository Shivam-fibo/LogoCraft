// import { Smile, SmileIcon } from "lucide-react";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { useEffect } from "react";
import { useContext } from "react";
import { Smile } from "lucide-react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";


const IconController = () => {


  const {state, dispatch} = useContext(UpdateStorageContext)
  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem("value")) || {};
    dispatch({ type: "UPDATE_ICON", payload: storageValue.icon || Smile });
    dispatch({ type: "UPDATE_ICON_SIZE", payload: storageValue.iconSize || 280 });
    dispatch({ type: "UPDATE_ICON_ROTATE", payload: storageValue.iconRotate || 0 });
    dispatch({ type: "UPDATE_ICON_COLOR", payload: storageValue.color || "#fff" });
  }, [dispatch]);

  useEffect(() => {
    const updateValue = {

      icon: state.icon,
      iconSize: state.iconSize,
      iconRotate: state.iconRotate,
      iconColor: state.iconColor,
    };
    console.log(updateValue)
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [state]);
 

  return (
    <div className="bg-white">
      <div>
      <IconList selectedIcon={(icon) => dispatch({ type: "UPDATE_ICON", payload: icon })} />
      <div className="py-2">
  <label className="py-2 flex justify-between items-center">
    Size <span>{state.iconSize}px</span>
  </label>
  <Slider
    className="bg-gray-100"
    value={[state.iconSize]}
    max={512}
    step={1}
    onValueChange={(e) => dispatch({ type: "UPDATE_ICON_SIZE", payload: e[0] })}
  />
</div>
{/* Rotate */}
<div className="py-2">
  <label className="py-2 flex justify-between items-center">
    Rotate <span>{state.iconRotate} °</span>
  </label>
  <Slider
    className="bg-gray-100"
    value={[state.iconRotate]} 
    max={360}
    step={1}
    onValueChange={(e) => dispatch({ type: "UPDATE_ICON_ROTATE", payload: e[0] })}
  />
</div>
<div className="py-2">
  <label className="py-2 flex justify-between items-center">
    Color Picker
  </label>
  <ColorPickerController
    hideController={true}
    selectedColor={(color) => dispatch({ type: "UPDATE_ICON_COLOR", payload: color })}
  />
</div>

      </div>
    </div>
  );
};

export default IconController;
