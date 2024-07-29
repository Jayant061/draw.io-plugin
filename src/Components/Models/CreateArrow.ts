import { XMLElement } from "xmlbuilder";

export function createArrow(
  root: XMLElement,
  id: string,
  parent: string,
  value: string,
  source: string,
  target: string
) {
  const arrow = root.ele("mxCell", {
    id,
    value,
    edge: "1",
    source,
    target,
    style: `edgeStyle=orthogonalEdgeStyle;dashed=1;flowAnimation=1;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;`,
    parent,
  }); //90 degree
  // const arrow = root.ele('mxCell', { id, value, edge: '1', source, target, style: `endArrow=classic;html=1;rounded=0;`,parent });// for normal arrrow
  // const arrow = root.ele('mxCell', { id, value, edge: '1', source, target, style: `endArrow=none;dashed=1;html=1;rounded=0;flowAnimation=1`,parent }); //dotted
  arrow.ele("mxGeometry", { relative: "1", as: "geometry" });
  return arrow;
}
