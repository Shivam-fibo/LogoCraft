import React, { useContext, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundContorller = () => {
  const { state, dispatch } = useContext(UpdateStorageContext);

  // Load initial values from localStorage
  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem("value")) || {};
    dispatch({ type: "UPDATE_BG_ROUNDED", payload: storageValue.bgRounded || 0 });
    dispatch({ type: "UPDATE_BG_PADDING", payload: storageValue.bgPadding || 0 });
    dispatch({ type: "UPDATE_BG_COLOR", payload: storageValue.bgColor || "#fff" });
  }, [dispatch]);

  // Save updated values to localStorage
  useEffect(() => {
    const updateValue = {

      bgRounded: state.bgRounded,
      bgPadding: state.bgPadding,
      bgColor: state.bgColor,
    };
    console.log(updateValue)

    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [state]);

  return (
    <div>
      <div className="py-2">
        <label className="py-2 flex justify-between items-center">
          Rounded <span>{state.bgRounded} </span>{" "}
        </label>
        <Slider
          className="bg-gray-100"
          value={[state.bgRounded]} // Use value instead of defaultValue
          max={512}
          step={1}
          onValueChange={(e) => dispatch({ type: "UPDATE_BG_ROUNDED", payload: e[0] })}
        />
      </div>
      <div className="py-2">
        <label className="py-2 flex justify-between items-center">
          Padding <span>{state.bgPadding} </span>{" "}
        </label>
        <Slider
          className="bg-gray-100"
          value={[state.bgPadding]} // Use value instead of defaultValue
          max={100}
          step={1}
          onValueChange={(e) => dispatch({ type: "UPDATE_BG_PADDING", payload: e[0] })}
        />
      </div>
      <div className="py-2">
        <label className="py-2 flex justify-between items-center">
          Color Picker
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => dispatch({ type: "UPDATE_BG_COLOR", payload: color })}
        />
      </div>
    </div>
  );
};

export default BackgroundContorller;
