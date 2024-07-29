import { createGroup } from "../Models/CreateGroup";
import { createCell } from "../Models/CreateCell";
// import { createLine } from '../Models/CreateLine';
import { XMLElement } from "xmlbuilder";

//LT pannel
export function createInverter(
  root: XMLElement,
  uniqueId: string,
  value:string,
  x: number,
  y: number
) {
  createGroup(root, "Inverter"+uniqueId, "1", x, y);

  createCell(
    root,
    //id
    "Inverter"+uniqueId + "Panel1",
  // parent
  "Inverter"+uniqueId,
    "",
    x + 47,
    y - 4,
    4,
    4,
    "strokeColor=green;fillColor=green"
  );
  createCell(
    root,
    "Inverter"+uniqueId + "Panel2",
    "Inverter"+uniqueId,
    value,
    x,
    y,
    100,
    50,
    "strokeColor=green"
  );
  // uniqueId++;
}
