import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  titulo = 'Autor: Gabriel Lucas Girardi';
  constructor() { }

  ngOnInit() {
  }

}
