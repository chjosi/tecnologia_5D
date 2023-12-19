import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contatti:{nome:string, valore:string}[] = [];

  constructor(private http:HttpClient) {
    http.get<any[]>('http://localhost:3000/contacts').subscribe(
      res => {
        res.forEach(x => {
          this.contatti.push({nome: x['nome'], valore: x['valore']});
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}

