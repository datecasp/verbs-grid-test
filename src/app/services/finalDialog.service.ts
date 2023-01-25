import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalDialogComponent } from '../components/final-dialog/final-dialog.component';


@Injectable()
export class FinalDialogService {

  constructor(private modalService: NgbModal) { }

  public popUp(
    success: boolean,
    title: string,
    message: string,
    btnOkText: string = 'Close',
    dialogSize: 'sm' | 'lg' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(FinalDialogComponent, { size: dialogSize });
    modalRef.componentInstance.success = success;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;

    return modalRef.result;
  }
}
