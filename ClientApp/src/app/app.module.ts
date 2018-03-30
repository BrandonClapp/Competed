import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FetchDataComponent } from './fetch-data/fetch-data.component';

/* Services */ 
import { GameService } from './services/game.service';
import { TournamentService } from './services/tournament.service';


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
import { TournamentStandingsComponent } from './components/tournaments/tournament/tournament-standings/tournamentstandings.component';
import { TournamentStatisticsComponent } from './components/tournaments/tournament/tournament-statistics/tournamentstatistics.component';
import { TournamentScheduleComponent } from './components/tournaments/tournament/tournament-schedule/tournamentschedule.component';
import { TournamentMediaComponent } from './components/tournaments/tournament/tournament-media/tournamentmedia.component';
import { TournamentDetailsComponent } from './components/tournaments/tournament/tournament-details/tournamentdetails.component';
import { TournamentRulesComponent } from './components/tournaments/tournament/tournament-rules/tournamentrules.component';
import { TournamentDiscussionComponent } from './components/tournaments/tournament/tournament-discussion/tournamentdiscussion.component';
import { TournamentPrizesComponent } from './components/tournaments/tournament/tournament-prizes/tournamentprizes.component';
import { TournamentAnnouncementsComponent } from './components/tournaments/tournament/tournament-announcements/tournamentannouncements.component';



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
    TournamentDetailsComponent,
    TournamentTeamsComponent,
    TournamentRulesComponent,
    TournamentDiscussionComponent,
    TournamentPrizesComponent,
    TournamentStandingsComponent,
    TournamentStatisticsComponent,
    TournamentScheduleComponent,
    TournamentAnnouncementsComponent,
    TournamentMediaComponent,
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
      { path: ':org', component: TournamentDetailsComponent }, /* make org page ? */
      {
        path: 'tournaments/:gameSlug',
        component: TournamentsComponent,
        children: [
          { path: '', component: TournamentListComponent },
          {
            path: ':tournamentSlug',
            component: TournamentComponent,
            children: [
              { path: '', component: TournamentDetailsComponent, pathMatch: 'full' },
              { path: 'teams', component: TournamentTeamsComponent },
              { path: 'rules', component: TournamentRulesComponent },
              { path: 'standings', component: TournamentStandingsComponent },
              { path: 'statistics', component: TournamentStatisticsComponent },
              { path: 'schedule', component: TournamentScheduleComponent },
              { path: 'discussion', component: TournamentDiscussionComponent },
              { path: 'prizes', component: TournamentPrizesComponent },
              { path: 'announcements', component: TournamentAnnouncementsComponent },
              { path: 'media', component: TournamentMediaComponent },
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
