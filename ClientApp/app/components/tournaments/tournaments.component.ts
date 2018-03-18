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
    gameName: string;

    constructor(private route: ActivatedRoute, private gameService: GameService) {
        //this.gameService = gameService;
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug'];

            //let page = document.getElementById('page');
            //if (page) {
            //    page.style.backgroundImage = `url(/static/images/banners/${this.slug}.jpg)`;
            //}

            //console.log('page', page);

            this.gameService.getGame(this.slug).subscribe(game => {
                this.gameName = game.name;
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

}
