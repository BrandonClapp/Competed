import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { GameService } from '../../services/game.service';
import { TournamentService, Tournament } from '../../services/tournament.service';

@Component({
    selector: 'tournaments',
    templateUrl: './tournaments.component.html',
    styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private gameSlug: string;
    gameInfo: any = {};
    tournaments: Tournament[] = [];

    pages: number[] = [1, 2, 3, 4, 5, 6];
    itemsPerPage: number = 20;
    pageNum: number = 1;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: GameService,
        private tournamentService: TournamentService
    ) {
        console.log('constructor called');
        this.router = router;
        this.gameService = gameService;
    }

    ngOnInit() {
        console.log('on init called');
        this.routeSub = this.route.params.subscribe(params => {
            this.gameSlug = params['gameSlug'];

            this.gameService.getGame(this.gameSlug).subscribe(game => {
                this.gameInfo.name = game.name;
                this.gameInfo.iconUrl = `/static/images/icons/games/${this.gameSlug}.png`;
            });

            this.route.queryParams.subscribe(params => {
                if (params.page) {
                    this.pageNum = parseInt(params.page); // todo: error handling
                }
                if (params.perPage) {
                    this.itemsPerPage = parseInt(params.perPage); // todo: error handler
                }

                console.log('items per page', this.itemsPerPage);
                console.log('page num', this.pageNum);

                this.tournamentService.getTournaments(this.gameSlug, this.itemsPerPage, this.pageNum)
                    .subscribe(tournaments => {
                        this.tournaments = tournaments;
                });
            });

            
        });
    }

    getBackground() {
        if (this.gameSlug) {
            return `url(/static/images/backgrounds/games/${this.gameSlug}.jpg)`;
        }
        else {
            return '#fff';
        }
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    checkImage(imageSrc: string, good: any, bad: any) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = imageSrc;
    }

    navigateToPage(page: number) {
        console.log(page + 'clicked');
        // Object.assign is used as apparently 
        // you cannot add properties to snapshot query params
        const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);

        // Do sth about the params
        queryParams['page'] = page;

        this.router.navigate([], { queryParams: queryParams });
    }
}
