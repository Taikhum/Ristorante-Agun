import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import 'hammerjs';

import { DishService } from './services/dish.service';
import { LeaderService} from './services/leader.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Leader } from './shared/leader';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatToolbarModule,MatListModule,
    FlexLayoutModule,MatGridListModule,
    MatCardModule,
    MatButtonModule,AppRoutingModule

  ],
  providers: [DishService,LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
