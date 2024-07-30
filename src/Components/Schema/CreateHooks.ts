import { XMLElement } from "xmlbuilder";

export function createMxCellXML(root:XMLElement,uniqueId: string, x: number, y: number, width: number, height: number){
  uniqueId = `Hook${uniqueId}`
  const grp = root.ele('mxCell', {
    id: uniqueId,
    value: '',
    style: 'group;strokeWidth=2;direction=east;rotation=-180;',
    vertex: '1',
    connectable: '0',
    parent: '1'
  })
    .ele('mxGeometry', {
      x: x,
      y: y,
      width: width,
      height: height,
      as: 'geometry'
    }).up().up()
    .ele('mxCell', {
      id: `${uniqueId}Cell1`,
      value: '',
      style: 'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;startAngle=0.47786219334910734;endAngle=0.014285457105234005;strokeWidth=2;direction=east;rotation=-180;',
      parent: uniqueId,
      vertex: '1'
    })
      .ele('mxGeometry', {
        x: '53',
        y: '41',
        width: '40',
        height: '40',
        as: 'geometry'
      }).up().up()
    .ele('mxCell', {
      id: `${uniqueId}Cell2`,
      value: '',
      style: 'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;startAngle=0.47786219334910734;endAngle=0.014285457105234005;rotation=178;strokeWidth=2;direction=east;',
      parent: uniqueId,
      vertex: '1'
    })
      .ele('mxGeometry', {
        x: '54',
        y: '1',
        width: '40',
        height: '40',
        as: 'geometry'
      }).up().up()
    .ele('mxCell', {
      id: `${uniqueId}Cell3`,
      value: '',
      style: 'endArrow=none;html=1;rounded=0;strokeWidth=2;',
      edge: '1',
      parent: uniqueId
    })
      .ele('mxGeometry', {
        width: '50',
        height: '50',
        relative: '1',
        as: 'geometry'
      })
        .ele('mxPoint', { x: '71', y: '81', as: 'sourcePoint' }).up()
        .ele('mxPoint', { x: '1', y: '81', as: 'targetPoint' }).up()
      .up().up()
    .ele('mxCell', {
      id: `${uniqueId}Cell4`,
      value: '',
      style: 'endArrow=none;html=1;rounded=0;strokeWidth=2;',
      edge: '1',
      parent: uniqueId
    })
      .ele('mxGeometry', {
        width: '50',
        height: '50',
        relative: '1',
        as: 'geometry'
      })
        .ele('mxPoint', { x: '71', y: '41', as: 'sourcePoint' }).up()
        .ele('mxPoint', { x: '1', y: '41', as: 'targetPoint' }).up()
      .up().up()
    .ele('mxCell', {
      id: `${uniqueId}Cell5`,
      value: '',
      style: 'endArrow=none;html=1;rounded=0;strokeWidth=2;',
      edge: '1',
      parent: uniqueId
    })
      .ele('mxGeometry', {
        width: '50',
        height: '50',
        relative: '1',
        as: 'geometry'
      })
        .ele('mxPoint', { x: '71', y: '1', as: 'sourcePoint' }).up()
        .ele('mxPoint', { x: '1', y: '1', as: 'targetPoint' }).up()
      .up().up();

  return grp.end({pretty:true});
}
