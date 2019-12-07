import { Component, OnInit } from '@angular/core';
import { Lansamentos } from './lansamentos.model';

@Component({
  selector: 'trab-lansamentos',
  templateUrl: './lansamentos.component.html',
  styleUrls: ['./lansamentos.component.css']
})
export class LansamentosComponent implements OnInit {
  titulo = 'Lançamentos 2019';
  lansamentoss: Lansamentos[] = [
  {name: 'Resident Evil 2 RE. PS4/Xbox One/PC. 25 de janeiro.'},
  {name: 'Kingdom Hearts 3. PS4/Xbox One. 29 de janeiro.'},
  {name: 'Anthem. PS4/Xbox One/PC. 22 de fevereiro.'},
  {name: 'Jump Force. PS4/Xbox One/PC. 15 de fevereiro.'},
  {name: 'Crackdown 3. Xbox One/PC. 15 de fevereiro.'},
  {name: 'Metro: Exodus. PS4/Xbox One/PC. 15 de fevereiro'},
  {name: 'Dead or Alive 6. PS4/Xbox One/PC. 15 de fevereiro'},
  {name: 'Devil May Cry 5. PS4/Xbox One/PC. 8 de março'},
  {name: 'The Division 2. PS4/Xbox One/PC. 15 de março'},
  {name: 'Sekiro: Shadows Die Twice. PS4/Xbox One/PC. 22 de março'},
  {name: 'Mortal Kombat 11. PS4/Xbox One/Switch/PC. 23 de abril'},
  {name: 'Days Gone. PS4. 26 de abril.'},
  {name: 'Rage 2. PS4/Xbox One/PC. 14 de maio.'},
  {name: 'Crash Team Racing Nitro-Fueled. PS4/Xbox One/Switch. 21 de junho.'},
  {name: 'Bloodstained: Ritual of the Night. PS4/Xbox One/Switch/Vita/PC. 18 de junho.'},
  {name: 'Control. PS4/Xbox One/PC. 22 de agosto.'},
  {name: 'Gears 5. Xbox One/PC. 10 de setembro.'},
  {name: 'Luigi"s Mansion 3. Switch. Switch'},
  {name: 'Ori and the Will of the Wisps. Xbox One/PC. 2019'},
  {name: 'Death Stranding. PS4. 8 de novembro'},
  {name: 'Star Wars: Jedi Fallen Order. PC/PS4/Xbox One. 15 de novembro.'},
  {name: 'Link"s Awakening. Switch. 20 de setembro.'},
  {name: 'Pokémon Sword & Shield. Switch. 15 de novembro'},
  {name: 'Call of Duty: Modern Warfare. PC/PS4/Xbox One. 25 de outubro.'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
