import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'commentDate'
})
export class CommentDatePipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    const format = args[0] || 'yyyy年MM月dd日 HH:mm:ss';
    return formatDate(value, format, 'en-US');
  }
}