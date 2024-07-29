import React, { useState, useEffect } from "react";
import * as xmlbuilder from "xmlbuilder";
import { DrawIoEmbed } from "react-drawio";
import { XMLElement } from "xmlbuilder";
import { createArrow } from "./Models/CreateArrow";
import { createInverter } from "./Schema/Inverter";
import { createTransformer } from "./Schema/Transformer";
import { createTriangle } from "./Models/CreateTriangle";


const Draw = () => {
  const [xmlData, setXmlData] = useState<string | undefined>(undefined);
  const jsonContent = {
    author: "Erik T. Ray",
    year: "2003",
    price: "39.95",
    name: "Sakshi",
  };
  const jsonContent2 = {
    author: "Nikhil",
    year: "200100",
    price: "39.95",
    name: "Sakshi",
  };

  const jsonToXml = (jsonObj:any) => {
    const drawioXml: XMLElement = xmlbuilder.create("mxfile", {
      version: "1.0",
      encoding: "UTF-8",
      standalone: true,
    });
    drawioXml
      .att("host", "app.diagrams.net")
      .att("modified", new Date().toISOString())
      .att("agent", window.navigator.userAgent)
      .att("version", "24.4.10")
      .att("type", "device");

    const diagram = drawioXml.ele("diagram", { name: "Page-1" });
    const graphModel = diagram.ele("mxGraphModel", {
      dx: "0",
      dy: "0",
      grid: "1",
      gridSize: "10",
      guides: "1",
      tooltips: "1",
      connect: "1",
      arrows: "1",
      fold: "1",
      page: "1",
      pageScale: "1",
      pageWidth: "850",
      pageHeight: "1100",
      math: "0",
      shadow: "0",
    });

    const root = graphModel.ele("root");
    root.ele("mxCell", { id: "0" });
    root.ele("mxCell", { id: "1", parent: "0" });
    

    createArrow(root,"arrow-1","1", "","Inverter1Panel2","Transformer1Triangle1");
    createInverter(root,"1","LT Panel-1",200,200)
    createInverter(root,"2","LT Panel-2",140, 200)
    createTransformer(root,"1",200,500)
    createTriangle(root,"1","1","",20,20,30,30,false)
    

    return drawioXml.end({ pretty: true });
  };

  const handleConvertAndDownload = (obj:any) => {
    if (obj) {
      const xmlContent = jsonToXml(obj);
      return xmlContent;
    } else {
      alert("Please upload a valid JSON file first");
    }
  };

  useEffect(() => {
    const x = handleConvertAndDownload(jsonContent);
    setXmlData(x);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow:"hidden" }}>
      <DrawIoEmbed xml={xmlData}
      // onExport={(data)=>console.log(data.data)}
       />
    </div>
  );
};

export default Draw;
