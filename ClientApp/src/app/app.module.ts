import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameGridComponent } from './components/games/gamegrid/gamegrid.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentComponent } from './components/tournaments/tournament/tournament.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { GameService } from './services/game.service';
import { TournamentService } from './services/tournament.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    GameGridComponent,
    TournamentsComponent,
    TournamentComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'games', component: GamesComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'tournaments/:gameSlug', component: TournamentsComponent },
      { path: 'tournaments/:gameSlug/:tournamentSlug', component: TournamentComponent },
      { path: '**', redirectTo: 'fetch-data' }
    ])
  ],
  providers: [
    GameService,
    TournamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
