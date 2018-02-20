import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: DetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    DetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


