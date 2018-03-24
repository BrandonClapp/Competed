import { Component, Input } from "@angular/core";

@Component({
  selector: 'tournament-header',
  templateUrl: './tournamentheader.component.html',
  styleUrls: ['./tournamentheader.component.css']
})
export class TournamentHeaderComponent {
  @Input() title: string;
  @Input() iconUrl: string;
  @Input() metaLine: string;
}
