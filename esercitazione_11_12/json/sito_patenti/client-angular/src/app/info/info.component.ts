import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  patenti:{nome:string, descrizione:string}[] = [];

  constructor(private http:HttpClient) {
    http.get<any[]>('http://localhost:3000/info').subscribe(
      res => {
        res.forEach(x => {
          this.patenti.push({nome: x['nome'], descrizione: x['descrizione']});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
