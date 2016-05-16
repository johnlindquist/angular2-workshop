import {Pipe} from '@angular/core';
@Pipe({
  name: 'search'
})
export class Search{
  transform(data, key, term = ""){
    if(!data) return null;
    return data.filter(item => {
      return item[key].toLowerCase().includes(term.toLowerCase());
    })
  }
}
