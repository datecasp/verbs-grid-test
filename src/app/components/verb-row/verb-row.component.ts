import { Component, Input } from '@angular/core';
import { Verb } from '../../models/Verb';

@Component({
  selector: 'app-verb-row',
  templateUrl: './verb-row.component.html',
  styleUrls: ['./verb-row.component.css']
})
export class VerbRowComponent {
  @Input() result: Verb[] = [];
  displayedColumns: string[] = ['spanish', 'present', 'past', 'participle'];
  dataSource = this.result;

  public charMatcher(char: string): boolean {
    if (char.match(/[a-z//]/i)) {
      return true;
    }
    return false;
  }
}
