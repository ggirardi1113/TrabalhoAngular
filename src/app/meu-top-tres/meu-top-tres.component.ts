
import { Component, OnInit, Input } from '@angular/core';
import {MeuTopTres} from './meu-top-tres.model';

@Component({
  selector: 'trab-meutoptres',
  templateUrl: './meu-top-tres.component.html',
  styleUrls: ['./meu-top-tres.component.css']
})
export class MeuTopTresComponent implements OnInit {

  @Input()  meutoptres: MeuTopTres;

  constructor() { }
  ngOnInit() {
  }

}
