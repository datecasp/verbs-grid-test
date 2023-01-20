import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VERBS_LIST } from 'src/data/verbs-list';
import { ABECEDARY } from 'src/data/abecedary';
import { Verb } from '../models/Verb';

@Injectable({
  providedIn: 'root'
})
export class VerbsRepository {

  verbsList: Verb[] = VERBS_LIST;
  abecedary: string[] = ABECEDARY;

  public getVerbsList(): Verb[] {
    return this.verbsList;
  }

  public getAbecedary(): string[] {
    return this.abecedary;
  }
}
