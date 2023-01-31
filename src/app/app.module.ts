import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { BackgroundDirective } from './background.directive';
import { AgePipe } from 'src/pipes/age.pipe';
import { NamesPipe } from 'src/pipes/names.pipe';

@NgModule({
  declarations: [				
    AppComponent,
    SquareComponent,
      MyDirectiveDirective,
      BackgroundDirective,
      AgePipe,
      NamesPipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
