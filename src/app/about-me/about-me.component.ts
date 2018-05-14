import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public name: string;
  public surname: string;
  public email: string;
  public cv: string;
  public app_description : string[];

  constructor() { }

  ngOnInit() {
    this.name = "Jonatan Emmanuel"
    this.surname = "Sívori Espath"
    this.email = "jonatansivori@gmail.com"
    this.cv = "https://jsivori.github.io/cv/"
    this.app_description = [
      "Esta es una app desarrollada como examen inicial para el reclutamiento en Despegar.", 
      "La App esta desarrollada en Angular en su ultima versión al dia de la fecha (Mayo de 2018)."
    ]
  }

}
