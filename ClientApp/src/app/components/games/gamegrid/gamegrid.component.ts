import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'gamegrid',
    templateUrl: './gamegrid.component.html',
    styleUrls: ['./gamegrid.component.css']
})
export class GameGridComponent implements OnInit, OnChanges {

    @Input() filter: string;
    @Input() games: Array<Game>;

    allGames: Array<Game>;

    constructor() { }

    ngOnInit() {

        for (let game of this.games) {
            game.imgUrl = `static/images/games/${game.slug}.jpg`;
        }
        this.allGames = Object.assign([], this.games);

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes.filter && this.allGames) {
            this.games = this.allGames.filter((g) => {
                let gameName = g.name.toLowerCase();
                let filterName = this.filter.toLowerCase();
                return gameName.includes(filterName);
            });
        }
    }

}

export interface Game {
    name: string;
    slug: string;
    imgUrl: string;
}