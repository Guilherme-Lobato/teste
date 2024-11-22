import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestaoComponent } from './components/gestao/gestao.component';
import { NewGroupComponent } from './components/new-group/new-group.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicial', pathMatch: 'full' },
  { path: 'inicial', component: GestaoComponent },
  { path: 'group', component: NewGroupComponent },
  { path: 'modal', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
