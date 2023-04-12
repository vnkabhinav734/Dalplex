/*Author: Sumit Kumar B00904097*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, n: number): string {
    if (!value) {
      return '';
    }

    return ('' + value).slice(0, n)
      .replace(/./g, '*')
      + ('' + value).slice(n, value.length);
  }

}
