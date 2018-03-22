import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TournamentService {
    constructor() { }
    private tournaments: Tournament[] = [
        <Tournament>{
            name: 'Super Casual Silver Capped',
            slug: 'super-casual-silver-capped',
            game: 'league-of-legends',
            type: 'Single Elimination',
            participants: 7,
            capacity: 8,
            created: '3-19-2018',
            status: 'Open',
            organizer: 'Brandon'
        },
        <Tournament>{
            name: 'All Fools ARAM',
            slug: 'all-fools-aram',
            game: 'league-of-legends',
            type: 'Single Elimination',
            participants: 8,
            capacity: 8,
            created: '3-19-2018',
            status: 'In Progress',
            organizer: 'Brandon'
        },
        <Tournament>{
            name: 'Battle Royale',
            slug: 'battle-royale',
            game: 'fortnite',
            type: 'Continuous',
            participants: 14,
            capacity: 16,
            created: '3-19-2018',
            status: 'Open',
            organizer: 'Brandon'
        },
        <Tournament>{
            name: 'Casually Heroes',
            slug: 'casually-heroes',
            game: 'heroes-of-the-storm',
            type: 'Continuous',
            participants: 18,
            capacity: 20,
            created: '3-19-2018',
            status: 'Open',
            organizer: 'Brandon'
        },
    ];

    getTournaments(gameSlug: string, numPerPage: number, pageNum: number): Observable<Tournament[]> {
        let gameTournaments = this.tournaments.filter(t => t.game == gameSlug);
        return of(
            gameTournaments
        );
    }

    getTournament(gameSlug: string, tournamentSlug: string): Observable<Tournament> {
        let tournament = this.tournaments.find(t => t.slug === tournamentSlug && t.game == gameSlug);
        return of(
            <Tournament>tournament
        );
    }
}

export interface Tournament {
    name: string;
    slug: string;
    game: string;
    type: string;
    participants: number;
    capacity: number;
    created: string;
    status: string;
    organizer: string;
}
