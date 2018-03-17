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
    private gameName: string;

    constructor(private route: ActivatedRoute, private gameService: GameService) {
        //this.gameService = gameService;
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug'];

            this.gameService.getGame(this.slug).subscribe(game => {
                this.gameName = game.name;
            });
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

}
