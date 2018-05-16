import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public title : string = "Sobre";
  public name: string;
  public surname: string;
  public email: string;
  public telephone: string;
  public cv: string;
  public app_description: string[];
  public observations : string[];

  constructor() { }

  ngOnInit() {
    this.name = "Jonatan Emmanuel";
    this.surname = "Sívori Espath";
    this.email = "jonatansivori@gmail.com";
    this.telephone = "+ 54 9 221 4196703";
    this.cv = "https://jsivori.github.io/cv/";
    this.app_description = [
      "Esta es una app desarrollada como examen inicial para el reclutamiento en Despegar.", 
      "La App esta desarrollada en Angular en su ultima versión al dia de la fecha (Mayo de 2018)."
    ];
    this.observations = [
      "No tenia conocimientos previos de Angular hasta este test.",
      "Lo que hice fue mirar videos de CRUD en Youtube, luego segui unos cursos en Udemy y CodigoFacilito para saber mas sobre los eventos basicos, animaciones, directivas y lenguaje TS.",
      "Hasta el momento, mis desarrollos de frontend eran solo aplicaciones de estilos como Bootstrap o AdminLTE, la mayor parte de mis desarrollos se centraban en el backEnd principalmente, es por eso que, aplico para el puesto de frontEnd, ya que quiero crecen en este aspecto y estar al dia con las tecnologias que se usan para desarrollar.",
      "Particularmente, Angular en su ultima version al dia de la fecha me parecio un framework muy potente y sencillo para encarar aplicaciones mas que presentables a un usuario final, su sintaxis es facil de entender(en conceptos basicos) y hay documentacion que respalda mayormente los problemas que me fueron apareciendo durante la tarea de desarrollo.",
      "Para correr la app solamente se debe tener instalado el framework y basta con correr la directiva 'ng serve' dentro de la carpeta y ejecutar dentro de localhost: 4200 o el puerto especificado.",
      "Observaciones: El desarrollo se realizo en 3 dias, si bien he pedido una extension del plazo, como mencione, estoy recien llegado de un viaje y tuve que realizar tramites y una mudanza es por eso que pedi el plazo de extension ya que en dos dias llegaba pero a entregar algo no totalmente funcional, para el dia 2 a la noche tenia todo menos la funcionalidad de sorting de la tabla y no queria entregar con piezas faltantes de lo pedido.",
      "Ademas agregue unas pantallas para hacer un poco mas realista el sitio y asi mismo esta mismo informacion fue puesta en el apartado 'Sobre' de la App.",
      "Pensaba en utilizar LocalStorage para la App pero con un arreglo como vi en los tutoriales me parecio suficiente y no queria excederme del plazo mas de lo actual."
    ];
  }

}


