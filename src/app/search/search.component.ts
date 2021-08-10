import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  url: string = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  token: string = "3d5f46e6e12b88d621917bbc7a956c7763db6163";
  query: string;
  obj: any;
  options: any;

  search() {
    this.options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + this.token
      },
      body: JSON.stringify({query: this.query})
  }

  fetch(this.url, this.options)
    .then(res => res.json())
    .then(data => this.obj = data.suggestions)
    .then(() => console.log(this.obj))
  }
}