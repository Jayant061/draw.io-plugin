import { XMLElement } from "xmlbuilder";

export function createCell(
  root: XMLElement,
  id: string,
  parent: string,
  value: string,
  x: number,
  y: number,
  width: number,
  height: number,
  style = ""
) {
  const cell = root.ele("mxCell", {
    id,
    value,
    style: `rounded=0;whiteSpace=wrap;html=1;${style}`,
    vertex: "1",
    parent,
  });
  cell.ele("mxGeometry", { x, y, width, height, as: "geometry" });
  return cell;
}
