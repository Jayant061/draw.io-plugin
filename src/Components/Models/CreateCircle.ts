import { XMLElement } from "xmlbuilder";

export function createCircle(
  root: XMLElement,
  id: string,
  parent: string,
  value: string,
  x: number,
  y: number,
  diameter: number
) {
  const cell = root.ele("mxCell", {
    id,
    value,
    style: `ellipse;whiteSpace=wrap;html=1;strokeColor=black;fillOpacity=25;`,
    vertex: "1",
    parent,
  });
  cell.ele("mxGeometry", {
    x,
    y,
    width: diameter,
    height: diameter,
    as: "geometry",
  });
  return cell;
}
