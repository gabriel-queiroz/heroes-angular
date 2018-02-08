import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../Hero';





@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent   {

  @Input('hero')
  hero: Hero;
  @Output()
  mudarValor = new EventEmitter();

  constructor() { }

  ocultarDetails() {
    console.log('mudando');
    this.hero = null;
    this.mudarValor.emit(null);

  }
}
