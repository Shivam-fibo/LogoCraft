import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { useState } from "react";

import { iconList } from "@/constants/icons";

export default function IconList({selectedIcon}) {


  const storageValue = JSON.parse(localStorage.getItem('value'))
  const [icon, setIcon] = useState(storageValue?storageValue?.icon : "smile")

  const [openDialog, setOpenDialog] = useState(false);
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <div>
        <h3>Icon</h3>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-4 bg-gray-200 cursor-pointer w-[50px] h-[50px]
           flex items-center justify-center rounded-md"
        >
           <Icon name={icon} size={20} color={"#000000"} />
        </div>
      </div>
      <Dialog open={openDialog}>
       
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select your icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  overflow-auto h-[350px]">
                {iconList.map((icon, index) => (
                  <div key={index} className="pt-2 size-12  cursor-pointer flex rounded-sm items-center justify-center " onClick = {() => {selectedIcon(icon); setOpenDialog(false); setIcon(icon)}}> 
                    <Icon name={icon} size={20} color={"#fff"} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
