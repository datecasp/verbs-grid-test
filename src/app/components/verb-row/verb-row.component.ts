import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Verb } from '../../models/Verb';
import { NgForm } from '@angular/forms';
import { VerbRenderer } from '../../models/VerbRenderer';

@Component({
  selector: 'app-verb-row',
  templateUrl: './verb-row.component.html',
  styleUrls: ['./verb-row.component.css']
})
export class VerbRowComponent implements OnInit{
  @Input() verbsInput: VerbRenderer[] = [];
  verbsOutput: Verb[] = [];

  ngOnInit(): void {
    this.verbsOutput = this.verbsInput;
  }

  public charMatcher(char: string): boolean {
    if (char.match(/[a-z//]/i)) {
      return true;
    }
    return false;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
