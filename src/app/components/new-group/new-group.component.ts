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
  copyGroups: any[] = [];
  pesquisa = '';

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "70%",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((groupName: string) => {
      if (groupName) {
        let novoCard = {
          id: (Math.random() * 10000).toFixed(),
          groupName
        }
        this.groups.push(novoCard);
      }
    });
  }

  deleteCard(id: number) {
    this.groups = this.groups.filter((group) => id !== group.id)
  }

  editCard(id: number) {
    const editName = this.groups.find((group) => id === group.id);
    
    if (editName) {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: "70%",
        disableClose: true,
        data: { groupName: editName.groupName }
      });
      dialogRef.afterClosed().subscribe((groupName: string) => {
        if (groupName) {
          editName.groupName = groupName;
        }
      });
    }
  }

  get filtered (): any[] {
     return this.copyGroups = this.groups.filter((group) => group.groupName.toLowerCase().includes(this.pesquisa.toLowerCase()));
  }
}
    
