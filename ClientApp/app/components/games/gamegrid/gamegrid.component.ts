import { Component, Input } from '@angular/core';

@Component({
    selector: 'gamegrid',
    templateUrl: './gamegrid.component.html',
    styleUrls: ['./gamegrid.component.css']
})
export class GameGridComponent {

    @Input() games: Array<Game>
    constructor() {
        this.games = [
            <Game>{ name: 'League of Legends', slug: 'league-of-legends' },
            <Game>{ name: 'Rocket League', slug: 'rocket-league' },
            <Game>{ name: 'Fortnite', slug: 'fortnite' },
            <Game>{ name: 'Hearthstone', slug: 'hearthstone' },
            <Game>{ name: 'Counter Strike: GO', slug: 'counter-strike-global-offensive' },
            <Game>{ name: 'Minecraft', slug: 'minecraft' },
            <Game>{ name: 'Battlefield 1', slug: 'battlefield-1' },
            <Game>{ name: 'Battlerite', slug: 'battlerite' },
            <Game>{ name: 'Dota 2', slug: 'dota-2' },
            <Game>{ name: 'Heroes of the Storm', slug: 'heroes-of-the-storm' },
            <Game>{ name: 'Madden NFL 18', slug: 'madden-nfl-18' },
            <Game>{ name: 'Overwatch', slug: 'overwatch' },
            <Game>{ name: 'Paladins', slug: 'paladins' },
            <Game>{ name: 'PUBG', slug: 'playerunknowns-battlegrounds' },
            <Game>{ name: 'Smite', slug: 'smite' },
            <Game>{ name: 'Starcraft 2', slug: 'starcraft-2' },
            <Game>{ name: 'World of Warcraft', slug: 'world-of-warcraft' },
        ];

        for (let game of this.games) {
            game.imgUrl = `static/images/games/${game.slug}.jpg`;
        }
    }


}

export interface Game {
    name: string;
    slug: string;
    imgUrl: string;
}