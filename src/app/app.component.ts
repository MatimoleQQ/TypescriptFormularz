import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt';
  imieinazw: string = "";
  email: string="Prosze Wpisac email";
  produkt: string = "";
  number: number = 1;
  wiadomosc: string = "Jesli jakis problem to napisz";

  onSubmit() {
    console.log("wszystko dziala");
  }
}
