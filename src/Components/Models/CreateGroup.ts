import { XMLElement } from "xmlbuilder";

export function createGroup(
  root: XMLElement,
  id: string,
  parent: string,
  x: number,
  y: number
) {
  const group = root.ele("mxCell", {
    id,
    style: "group",
    vertex: "1",
    parent,
  });
  group.ele("mxGeometry", {
    x,
    y,
    width: "0",
    height: "0",
    as: "geometry",
  });
  return group;
}
