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
export class TournamentComponent implements OnInit {
  private gameSlug: string;
  private tournamentSlug: string;
  tournament: Tournament;
  gameInfo: any = {}

  title: string;
  iconUrl: string;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private tournamentService: TournamentService
  ) {
    //this.gameService = gameService;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameSlug = this.route.parent.snapshot.params['gameSlug'];
      this.tournamentSlug = params['tournamentSlug'];

      this.gameService.getGame(this.gameSlug).subscribe(game => {
        //this.gameInfo.name = game.name;
        this.iconUrl = `/images/icons/games/${this.gameSlug}.png`;
      });

      this.tournamentService.getTournament(this.gameSlug, this.tournamentSlug).subscribe(tournament => {
        this.tournament = tournament;
        this.title = tournament.name;
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

}
