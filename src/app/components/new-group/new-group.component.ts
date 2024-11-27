import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { group } from '@angular/animations';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {
  constructor(private dialog: MatDialog) { }
  
  groups: any[] = [];
  pesquisa = '';
  tipo = '';

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "70%",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((formulario) => {
      if (groupName && typeGroup) {
        let novoCard = {
          id: (Math.random() * 10000).toFixed(),
          groupName,
          typeGroup
        }
        console.log(novoCard)
        this.groups.push(novoCard);
      }
    });
  }

  deleteCard(id: number) {
    this.groups = this.groups.filter((group) => id !== group.id)
  }

  editCard(id: number) {
    const edit = this.groups.find((group) => id === group.id);
    
    if (edit) {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: "70%",
        disableClose: true,
        data: { 
          groupName: edit.groupName,
          typeGroup: edit.typeGroup
         }
      });
      dialogRef.afterClosed().subscribe(([groupName, typeGroup]: [string, string]) => {
        if (groupName && typeGroup) {
          edit.groupName = groupName;
          edit.typeGroup = typeGroup;
        }
      });
    }
  }

  get filtered (): any[] {
     return this.groups.filter((group) => group.groupName.toLowerCase().includes(this.pesquisa.toLowerCase()) && group.typeGroup.includes(this.tipo));
  }
}