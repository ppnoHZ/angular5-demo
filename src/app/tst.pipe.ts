import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tst'
})
export class TstPipe implements PipeTransform {

  transform(value: string, args: string): string {
    return (value + args).toLocaleUpperCase();
  }

}
