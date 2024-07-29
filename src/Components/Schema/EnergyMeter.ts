import { XMLElement } from "xmlbuilder";
import { createLine } from "../Models/CreateLine";
import { createGroup } from "../Models/CreateGroup";

  //T shape
  export function createTfunction(root: XMLElement,id:string,x: number, y:number){
    //x=440, y=240
    createGroup(root,"EnergyMeter"+id,"1",x,y);
    createLine(root,`EnergyMeter${id}energyLine1`, "EnergyMeter"+id, x, y + 40, x, y - 40, "strokeWidth=4");
    createLine(root,`EnergyMeter${id}energyLine2`, "EnergyMeter"+id, x - 80, y, x, y, "strokeWidth=4");
  };