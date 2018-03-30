import { Component, OnInit } from "@angular/core";
import { TournamentService, Tournament } from "../../../services/tournament.service";
import { ActivatedRoute } from "@angular/router";
import { GameService } from "../../../services/game.service";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'tournament-list',
  templateUrl: './tournamentlist.component.html',
  styleUrls: ['./tournamentlist.component.css']
})
export class TournamentListComponent implements OnInit, OnDestroy {

  routeSub: Subscription;
  route: ActivatedRoute;
  tournamentService: TournamentService;
  gameService: GameService;
  tournaments: Tournament[];

  title: string;
  iconUrl: string;
  metaLine: string = '4 public tournaments';

  constructor(
    route: ActivatedRoute,
    tournamentService: TournamentService,
    gameService: GameService
  ) {
    this.route = route;
    this.tournamentService = tournamentService;
    this.gameService = gameService;
  }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      let gameSlug = params.gameSlug;

      this.gameService.getGame(gameSlug).subscribe(game => {
        this.title = `${game.name} Tournaments`;
        this.iconUrl = `/images/icons/games/${gameSlug}.png`;
      });

      this.tournamentService.getTournaments(gameSlug, 25, 1)
        .subscribe(tournaments => {
          this.tournaments = tournaments;
        });

    });
    
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
