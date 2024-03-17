import { AType, AstBase } from "./AstTypes";


function astFilter(item: AstBase): boolean {
    return item.type !== AType._IGNORE
  }
  
  export function astAdd(arr: AstBase[], item: AstBase | undefined): AstBase[] {
    if (item && astFilter(item)) {
      arr.push(item)
    }
    return arr
  }
  
  export function astAppend(arr: AstBase[], items: AstBase[]): AstBase[] {
    const filteredItems = items.filter(astFilter);
    arr = arr.concat(...filteredItems);
    return arr
  }
  
  export class AstNodes {
    private nodeArray: AstBase[] = []
  
    public add(item: AstBase | undefined): AstNodes {
      this.nodeArray = astAdd(this.nodeArray, item)
      return this
    }
  
    public append(items: AstBase[]): AstNodes {
      this.nodeArray = astAppend(this.nodeArray, items)
      return this
    }
  
    public array(): AstBase[] {
      return this.nodeArray
    }
  }