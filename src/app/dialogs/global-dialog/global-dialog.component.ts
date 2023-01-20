import { Component, Inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-global-dialog',
  templateUrl: './global-dialog.component.html',
  styleUrls: ['./global-dialog.component.css']
})
export class GlobalDialogComponent {
  @Input() success: boolean = false;
  @Input() title: string = "";
  @Input() message: string = "";
  @Input() word: string = "";
  @Input() btnOkText: string = "";

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
