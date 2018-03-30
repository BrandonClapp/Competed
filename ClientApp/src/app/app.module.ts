import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './components/tabs/tabs.component';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameGridComponent } from './components/games/gamegrid/gamegrid.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentHeaderComponent } from './components/tournaments/tournament-header/tournamentheader.component';
import { TournamentListComponent } from './components/tournaments/tournament-list/tournamentlist.component';
import { TournamentComponent } from './components/tournaments/tournament/tournament.component';
import { TournamentTeamsComponent } from './components/tournaments/tournament/tournament-teams/tournamentteams.component';
import { TournamentOverviewComponent } from './components/tournaments/tournament/tournament-overview/tournamentoverview.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { GameService } from './services/game.service';
import { TournamentService } from './services/tournament.service';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    GameGridComponent,
    TournamentsComponent,
    TournamentHeaderComponent,
    TournamentListComponent,
    TournamentComponent,
    TournamentOverviewComponent,
    TournamentTeamsComponent,
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
      {
        path: 'tournaments/:gameSlug',
        component: TournamentsComponent,
        children: [
          { path: '', component: TournamentListComponent },
          {
            path: ':tournamentSlug',
            component: TournamentComponent,
            children: [
              { path: '', component: TournamentOverviewComponent, pathMatch: 'full' },
              { path: 'teams', component: TournamentTeamsComponent }
            ]
          },
        ]
      },
      
      //{ path: '**', redirectTo: 'fetch-data' }
    ])
  ],
  providers: [
    GameService,
    TournamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
