import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value:string , ...args: unknown[]): number {
    const birthdate = new Date(value);
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const monthdiff = now.getMonth() - birthdate.getMonth();

    if (monthdiff < 0 || (monthdiff === 0 && now.getDate() < birthdate.getDate())){
      age--;
    }
    return age;
  }

}
