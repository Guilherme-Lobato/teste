import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  formulario: FormGroup
  laudador = "Laudador"
  dentista = "Dentista"
  
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {groupName: string, typeGroup: string},
  ) {
    if(data && data.groupName && data.typeGroup) {
      this.formulario = this.formBuilder.group({
        groupName: [data.groupName, [Validators.required]],
        typeGroup: [data.typeGroup, [Validators.required]],
      })
    } else {
        this.formulario = this.formBuilder.group({
          groupName: ['', [Validators.required]],
          typeGroup: ['', [Validators.required]],
        })
      }
  }

  saveGroup() {
    let formulario = {name: this.formulario.get('groupName').value, type: this.formulario.get('typeGroup').value}

    if (formulario) {
      this.dialogRef.close(formulario);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
