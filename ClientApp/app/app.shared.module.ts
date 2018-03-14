import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GamesComponent,
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
            { path: '**', redirectTo: 'fetch-data' }
        ])
    ]
})
export class AppModuleShared {
}
