import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solde'
})
export class SoldePipe implements PipeTransform {

  transform(solde: any): unknown {
    return 'product price ' + solde + 'DTN';
  }

}
