import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { GameService } from '../../../services/game.service';
import { TournamentService, Tournament } from '../../../services/tournament.service';

@Component({
    selector: 'tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private gameSlug: string;
    private tournamentSlug: string;
    tournament: Tournament;
    gameInfo: any = {}

    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private tournamentService: TournamentService
    ) {
        //this.gameService = gameService;
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.gameSlug = params['gameSlug'];
            this.tournamentSlug = params['tournamentSlug'];

            this.gameService.getGame(this.gameSlug).subscribe(game => {
                this.gameInfo.name = game.name;
                this.gameInfo.iconUrl = `/static/images/icons/${this.gameSlug}.png`;
            });

            this.tournamentService.getTournament(this.gameSlug, this.tournamentSlug).subscribe(tournament => {
                this.tournament = tournament;
            });
        });
    }

    getBackground() {
        if (this.gameSlug) {
            return `url(/static/images/banners/${this.gameSlug}.jpg)`;
        }
        else {
            return '#fff';
        }
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

}
