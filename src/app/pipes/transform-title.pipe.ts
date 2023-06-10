import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTitle',
})
export class TransformTitlePipe implements PipeTransform {
  transform(value: string): string {
    const result = value.replace(/\d+/g, '').replace('_', '');
    return result.trim();
  }
}
