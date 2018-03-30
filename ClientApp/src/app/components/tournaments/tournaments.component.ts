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
  title: string;
  iconUrl: string;
  tournaments: Tournament[] = [];

  pages: number[] = [1, 2, 3, 4, 5, 6];
  itemsPerPage: number = 20;
  pageNum: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
  ) {
    this.gameService = gameService;
    
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.gameSlug = params['gameSlug'];

      this.route.queryParams.subscribe(params => {
        if (params.page) {
          this.pageNum = parseInt(params.page); // todo: error handling
        }
        if (params.perPage) {
          this.itemsPerPage = parseInt(params.perPage); // todo: error handler
        }

        
      });


    });
  }

  getBackground() {
    if (this.gameSlug) {
      return `url(/images/backgrounds/games/${this.gameSlug}.jpg)`;
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

  
}
