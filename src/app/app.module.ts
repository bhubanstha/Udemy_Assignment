import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoggingService } from './Services/Logging.service';
import { UserService } from './Services/User.service';
import { InactiveComponent } from './inactive/inactive.component';
import { ActiveComponent } from './active/active.component';


@NgModule({
  declarations: [
    AppComponent,
    InactiveComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
