import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Verb } from '../../models/Verb';
import { NgForm } from '@angular/forms';
import { VerbRenderer } from '../../models/VerbRenderer';

@Component({
  selector: 'app-verb-row',
  templateUrl: './verb-row.component.html',
  styleUrls: ['./verb-row.component.css']
})
export class VerbRowComponent implements OnInit {
  @Input() verbsInput: VerbRenderer[] = [];
  verbsOutput: Verb[] = [];
  @Output() changeVerbsEvent = new EventEmitter<boolean>();
  @Output() checkAnswersEvent = new EventEmitter<VerbRenderer[]>();

  ngOnInit(): void {
    this.verbsOutput = this.verbsInput;
  }

  public charMatcher(char: string): boolean {
    if (char.match(/[a-z//]/i)) {
      return true;
    }
    return false;
  }

  onChangeVerbs() {
    this.changeVerbsEvent.emit(true);
  }

  onSubmit(f: NgForm) {
    this.checkAnswersEvent.emit(this.verbsInput);
  }
}
