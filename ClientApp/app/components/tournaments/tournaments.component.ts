import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'tournaments',
    templateUrl: './tournaments.component.html',
    styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private slug: string;
    gameInfo: any = {};

    tournaments: Array<Tournament> = [
        <Tournament>{ name: 'Super Casual Silver Capped', game: 'league-of-legends', type: 'Single Elimination', participants: 8, capacity: 12, created: '3-18-2018', status: 'Open', organizer: 'Brandon' },
        <Tournament>{ name: 'Rift Rivals', game: 'league-of-legends', type: 'Continuous', participants: 32, capacity: 32, created: '3-18-2018', status: 'Starting', organizer: 'Brandon' },
        <Tournament>{ name: 'Hot HOTS', game: 'heroes-of-the-storm', type: 'Single Elimination', participants: 8, capacity: 8, created: '3-18-2018', status: 'In Progress', organizer: 'Brandon' },
        <Tournament>{ name: 'Rocket Fuel Showdown', game: 'rocket-league', type: 'Single Elimination', participants: 8, capacity: 8, created: '3-18-2018', status: 'Finished', organizer: 'Brandon' },
        <Tournament>{ name: 'Battle Royale', game: 'fortnite', type: 'Single Elimination', participants: 8, capacity: 16, created: '3-18-2018', status: 'Open', organizer: 'Brandon' },
        <Tournament>{ name: 'Super Casual Silver Capped ARAM', game: 'league-of-legends', type: 'Single Elimination', participants: 7, capacity: 8, created: '3-18-2018', status: 'Open', organizer: 'Brandon' },
        <Tournament>{ name: 'Super Casual Silver Capped ARAM', game: 'league-of-legends', type: 'Single Elimination', participants: 3, capacity: 8, created: '3-18-2018', status: 'Open', organizer: 'Brandon' },
    ];

    constructor(private route: ActivatedRoute, private gameService: GameService) {
        //this.gameService = gameService;
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug'];

            this.gameService.getGame(this.slug).subscribe(game => {
                this.gameInfo.name = game.name;
                this.gameInfo.iconUrl = `/static/images/icons/${this.slug}.png`;
            });
        });
    }

    getBackground() {
        if (this.slug) {
            return `url(/static/images/banners/${this.slug}.jpg)`;
        }
        else {
            return '#fff';
        }
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    getIconImage(slug: string): string {

        let url = ``;

        this.checkImage(url,
            (el: HTMLElement, ev: Event) => {
                console.log('good');
                return '';
        },
            (el: HTMLElement, ev: Event) => {
                console.log('bad');
                return '';
            });

        return '';
    }

    checkImage(imageSrc: string, good: any, bad: any) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = imageSrc;
    }

}


export class Tournament {
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
