import { Smile } from "lucide-react";



export const initialState = {
    icon: Smile,
    iconSize: 280,
    iconRotate: 0,
    iconColor: "#fff",
    bgRounded: 0,
    bgPadding: 0,
    bgColor: "#fff"
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_ICON":
        return { ...state, icon: action.payload };
      case "UPDATE_ICON_SIZE":
        return { ...state, iconSize: action.payload };
      case "UPDATE_ICON_ROTATE":
        return { ...state, iconRotate: action.payload };
      case "UPDATE_ICON_COLOR":
        return { ...state, iconColor: action.payload };
      case "UPDATE_BG_ROUNDED":
        return { ...state, bgRounded: action.payload };
      case "UPDATE_BG_PADDING":
        return { ...state, bgPadding: action.payload };
      case "UPDATE_BG_COLOR":
        return { ...state, bgColor: action.payload };
      default:
        return state;
    }
  };
  