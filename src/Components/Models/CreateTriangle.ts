import { XMLElement } from "xmlbuilder";

export function createTriangle(
  root: XMLElement,
  id: string,
  parent: string,
  value: string,
  x: number,
  y: number,
  width: number,
  height: number,
  isInsideComponent:boolean,
  style = ""
) {
  const newId = isInsideComponent?id:"Traingle"+id
  const cell = root.ele("mxCell", {
    id:newId,
    value,
    style: `shape=triangle;whiteSpace=wrap;html=1;verticalAlign=middle;rotation=-90;${style}`,
    vertex: "1",
    parent,
  });
  cell.ele("mxGeometry", { x, y, width, height, as: "geometry" });
  console.log(newId)
  return cell;
}
