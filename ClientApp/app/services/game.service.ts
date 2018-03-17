import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GameService {
    constructor() { }
    private games: Game[] = [
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

    getGames(): Observable<Game[]> {
        return of(
            this.games
        );
    }

    getGame(slug: string): Observable<Game> {
        let game = this.games.find(g => g.slug === slug);
        return of(
            <Game>game
        );
    }
}

export class Game {
    name: string;
    slug: string;
}