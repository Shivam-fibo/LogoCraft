import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { iconList } from "@/constants/icons";

export default function IconList() {
    const [openDialog , setOpenDialog] = useState(false)
    const Icon = ({name, color, size}) => {
        const LucidIcon = icons[name]
        if(!LucidIcon){
          return ;
        }
        return <LucidIcon color = {color} size = {size} 
        
        />
     }
  return (
    <div>
        <div>
        <label>Icon</label>
        <div onClick={() => setOpenDialog(true)}
          className="p-4 bg-gray-200 cursor-pointer w-[50px] h-[50px]
           flex items-center justify-center rounded-md"
        >
          <Smile/>
        </div>
        </div>
        <Dialog open = {openDialog}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Select your icon</DialogTitle>
      <DialogDescription>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  overflow-auto h-[500px]">
                {iconList.map((icon, index)=>(
                    <div className="pt-2 size-12 ">
                        <Icon name={icon} size = {20} color = {'#fff'}/>
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
