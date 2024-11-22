import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  groupName = '';
  
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {groupName: string},
  ) {
    if(data && data.groupName) {
      this.groupName = data.groupName
    }
  }

  saveGroup() {
      this.dialogRef.close(this.groupName);
  }

  closeModal() {
    this.dialogRef.close();
  }

  attTitle(event: any) {
    console.log(event)
    this.groupName = event.target.value;
  }
}
