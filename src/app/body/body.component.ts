
import { Component, OnInit } from '@angular/core';
import {MeuTopTres} from '../meu-top-tres/meu-top-tres.model';

@Component({
  selector: 'trab-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  meutoptress: MeuTopTres[] = [
    {name: 'Kingdom Hearts 3', Top : true, temple: 'Adiquirido'},
    {name: 'Celste (atualização: um cápitulo adicional)', Top : true, temple: 'Adiquirido'},
    {name: 'Devil My Cry 5', Top : true, temple: 'Adiquirido'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
