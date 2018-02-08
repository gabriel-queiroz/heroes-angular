import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  hero = new Hero();
  @Output()
  clicked = new EventEmitter<Hero>();

  formAdicionar = false;

  constructor() { }

  ngOnInit() {
  }

  formadicionar1() {
    this.formAdicionar = !this.formAdicionar;
    console.log(this.formAdicionar);
  }

  adicionar() {
    this.clicked.emit(this.hero);
    console.log(this.hero);
  }

}
