import { Component, OnInit } from '@angular/core';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
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
  result: Verb[] = [];

  constructor(private verbService: VerbsService) {}

  ngOnInit(): void {
    this.headers = this.verbService.getHeaderService();
    this.getValues();
  }

  private getValues() {
    this.resetResult(this.result);
    this.verbsList = this.verbService.getRandomVerbsService(this.numVerbs);
    for (let i = 0; i < this.numVerbs; i++) {
      this.attributeList[i] = this.verbService.getRandomVerbAttributesService(this.verbsList[i]);
      let tempVerb: Verb = { id: -1, spanish: "", present: "", past: "", participle: "" };
      tempVerb.id = this.verbsList[i].id;
      if (this.attributeList[i].id == 0) {
        tempVerb.spanish = this.verbsList[i].spanish;
      }
      else if (this.attributeList[i].id == 1) {
        tempVerb.present = this.verbsList[i].present;
      }
      else if (this.attributeList[i].id == 2) {
        tempVerb.past = this.verbsList[i].past;
      }
      else {
        tempVerb.participle = this.verbsList[i].participle;
      }
      this.result.push(tempVerb);
    }
  }

  private resetResult(result: Verb[]) {
    for (let verb of result) {
      verb.id = verb.id;
      verb.spanish = "";
      verb.present = "";
      verb.past = "";
      verb.participle = "";
    }
  }
}
