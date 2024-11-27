import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestaoComponent } from './components/gestao/gestao.component';
import { MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NewGroupComponent } from './components/new-group/new-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    GestaoComponent,
    NewGroupComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
