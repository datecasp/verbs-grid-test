import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Header } from './models/Header';
import { Verb } from './models/Verb';
import { VerbAttribute } from './models/VerbAttribute';
import { VerbsService } from './services/verbs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VerbsGrid Test';
  numVerbs: number = 5; //Number of verbs in the test
  headers: Header[] = [];
  verbsList: Verb[] = [];
  attributeList: VerbAttribute[] = [];

  constructor(private verbService: VerbsService) {}

  ngOnInit(): void {
    this.headers = this.verbService.getHeaderService();
    this.getValues();
  }

  private getValues() {
    this.verbsList = this.verbService.getRandomVerbsService(this.numVerbs);
    for (let i = 0; i < this.numVerbs; i++) {
      this.attributeList[i] = this.verbService.getRandomVerbAttributesService(this.verbsList[i]);
    }
  }
}
