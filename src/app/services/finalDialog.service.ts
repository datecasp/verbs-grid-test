import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalDialogComponent } from '../components/dialogs/global-dialog/global-dialog.component';

@Injectable()
export class FinalDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    success: boolean,
    title: string,
    message: string,
    word: string,
    btnOkText: string = 'Close',
    dialogSize: 'sm' | 'lg' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(GlobalDialogComponent, { size: dialogSize });
    modalRef.componentInstance.success = success;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.word = word;
    modalRef.componentInstance.btnOkText = btnOkText;

    return modalRef.result;
  }
}
