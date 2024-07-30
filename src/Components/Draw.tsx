import React, { useState, useEffect } from "react";
import * as xmlbuilder from "xmlbuilder";
import { DrawIoEmbed } from "react-drawio";
import { XMLElement } from "xmlbuilder";
import { createArrow } from "./Models/CreateArrow";
import { createInverter } from "./Schema/Inverter";
import { createTransformer } from "./Schema/Transformer";
import { createTriangle } from "./Models/CreateTriangle";
import { createCircle } from "./Models/CreateCircle";
import { createMxCellXML } from "./Schema/CreateHooks";

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
  const ids = {
    "123":"transformer",
    "124":"circle",
    "125":"triangle"
  }

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

    createMxCellXML(root,"1",100,50,10,10)
    
    Object.entries(jsonObj).forEach(([key,value])=>{
      if(key==="124"){
        createTransformer(root,key,200,200)
      }
      else if(key ==="123"){
        createCircle(root,key,"1","",50,20,50);
      }
      else{
        createTriangle(root,key,"1","",70,70,30,30,false);
      }
    })
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
    const x = handleConvertAndDownload(ids);
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
