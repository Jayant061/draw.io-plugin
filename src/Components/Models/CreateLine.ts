import { XMLElement } from "xmlbuilder";

export function createLine(
  root: XMLElement,
  id: string,
  parent: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  style: string
) {
  const line = root.ele("mxCell", {
    id,
    style: `endArrow=none;html=1;rounded=0;strokeColor=green;${style}`,
    edge: "1",
    parent,
  });
  const mxGeometry = line.ele("mxGeometry", {
    relative: "1",
    as: "geometry",
  });
  mxGeometry.ele("mxPoint", { x: x1, y: y1, as: "sourcePoint" });
  mxGeometry.ele("mxPoint", { x: x2, y: y2, as: "targetPoint" });
  return line;
}
