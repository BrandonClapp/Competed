import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameGridComponent } from './components/games/gamegrid/gamegrid.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentComponent } from './components/tournaments/tournament/tournament.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { GameService } from './services/game.service';
import { TournamentService } from './services/tournament.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GamesComponent,
        GameGridComponent,
        TournamentsComponent,
        TournamentComponent,
        NavMenuComponent,
        FooterComponent,
        FetchDataComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
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
        TournamentService,
    ]
})
export class AppModuleShared {
}
