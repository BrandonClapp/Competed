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
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GamesComponent,
        GameGridComponent,
        TournamentsComponent,
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
            { path: 'tournaments/:slug', component: TournamentsComponent },
            { path: '**', redirectTo: 'fetch-data' }
        ])
    ]
})
export class AppModuleShared {
}
