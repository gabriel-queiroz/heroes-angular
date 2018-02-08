import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { HEROES } from '../Heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

          this.heroService
          .getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

  addHero(hero) {

    this.heroes.push(hero);

    console.log(hero);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  removeHero(hero: Hero) {
    const heroi = HEROES.filter(e => e.id === hero.id)[0];
    this.selectedHero = null;
    HEROES.splice(HEROES.indexOf(heroi), 1);
  }

  haveHero() {
    return this.haveHero ? true : false;
  }
}
