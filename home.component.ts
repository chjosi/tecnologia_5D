import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  servizi:{nome:string}[] = [];

  constructor(private http:HttpClient) {
    this.http.get<any[]>('http://localhost:3000/services').subscribe(
      res => {
        res.forEach(x => {
          this.servizi.push({nome: x['nome']});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
