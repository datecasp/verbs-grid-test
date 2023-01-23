import { Component, OnInit } from '@angular/core';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { Header } from './models/Header';
import { Verb } from './models/Verb';
import { VerbAttribute } from './models/VerbAttribute';
import { VerbRenderer } from './models/VerbRenderer';
import { VerbsService } from './services/verbs.service';
import { Tools } from './utils/tools';

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
  result: VerbRenderer[] = [];

  constructor(private verbService: VerbsService,
    private tools: Tools) { }

  ngOnInit(): void {
    this.headers = this.verbService.getHeaderService();
    this.getValues();
  }

  private getValues() {
    this.resetResult(this.result);
    this.verbsList = this.verbService.getRandomVerbsService(this.numVerbs);
    for (let i = 0; i < this.numVerbs; i++) {
      this.attributeList[i] = this.verbService.getRandomVerbAttributesService(this.verbsList[i]);
      let tempVerb: VerbRenderer = new VerbRenderer();
      tempVerb.id = this.verbsList[i].id;
      if (this.attributeList[i].id == 0) {
        tempVerb.spanish = this.verbsList[i].spanish;
        tempVerb.spanishFlag = true;
      }
      else if (this.attributeList[i].id == 1) {
        tempVerb.present = this.verbsList[i].present;
        tempVerb.presentFlag = true;
      }
      else if (this.attributeList[i].id == 2) {
        tempVerb.past = this.verbsList[i].past;
        tempVerb.pastFlag = true;
      }
      else {
        tempVerb.participle = this.verbsList[i].participle;
        tempVerb.participleFlag = true;
      }
      this.result.push(tempVerb);
    }
  }

  private resetResult(result: VerbRenderer[]) {
    for (let i = result.length; i >= 0; i--) { result.pop(); }
  }

  public changeVerbs() {
    this.getValues();
  }
  // TODO: Check this method NOT WORKING
  public checkAnswers(answer: VerbRenderer[]) {
    let isPassed: boolean = false;
    let answerList: Verb[] = this.tools.castVerbRendererIntoVerb(answer);
    for (let i = 0; i < answerList.length; i++) {
      if (this.verbsList[i] == answerList[i]) isPassed = true;
      }
    console.log(isPassed);
    }
  }

