import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcant'
})
export class TextcantPipe implements PipeTransform {
  cantidad: String;
  transform(text: string, param:string): any {
   
    if(!param){
      this.cantidad = text;
    }
    else{
      if(Number(param))
        this.cantidad = text.substring(0, parseInt(param))
      
    }
    return this.cantidad;
  }

}
