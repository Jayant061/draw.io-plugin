import {createCircle} from '../Models/CreateCircle';
import { createLine } from '../Models/CreateLine';
import { createTriangle } from '../Models/CreateTriangle';
import { createGroup } from '../Models/CreateGroup';
import { XMLElement } from 'xmlbuilder';



export function createTransformer (root: XMLElement,uniqueId:string,x: number, y:number) {

   createGroup(root,"Transformer"+uniqueId, "1", x, y);

    createCircle(root,"Transformer"+uniqueId+"Circle1", "Transformer"+uniqueId, "", x, y, 55); //left
    createCircle(root,"Transformer"+uniqueId+"Circle2", "Transformer"+uniqueId, "", x + 40, y, 55); //right
    createCircle(root,"Transformer"+uniqueId+"Circle3", "Transformer"+uniqueId, "", x + 23, y - 35, 55); //top

    createTriangle(root,"Transformer"+uniqueId+"Triangle1", "Transformer"+uniqueId, "", x + 15, y + 17, 20, 20,true);

    //upper Y
    createLine(root,"Transformer"+uniqueId+"Line1", "Transformer"+uniqueId, x + 43, y - 17, x + 50, y - 10,"");
    createLine(root,"Transformer"+uniqueId+"Line2", "Transformer"+uniqueId, x + 50, y - 10, x + 57, y - 17,"");
    createLine(root,"Transformer"+uniqueId+"Line3", "Transformer"+uniqueId, x + 50, y - 10, x + 50, y,"");

    //right y
    createLine(root,"Transformer"+uniqueId+"Line4", "Transformer"+uniqueId, x + 63, y + 23, x + 70, y + 30,"");
    createLine(root,"Transformer"+uniqueId+"Line5", "Transformer"+uniqueId, x + 70, y + 30, x + 77, y + 23,"");
    createLine(root,"Transformer"+uniqueId+"Line6", "Transformer"+uniqueId, x + 70, y + 30, x + 70, y + 40,"");
  };