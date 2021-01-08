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
import {MatRadioModule} from '@angular/material/radio';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {MatNativeDateModule} from '@angular/material/core';

import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { DishService } from './services/dish.service';
import { LeaderService} from './services/leader.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { PromotionService } from './services/promotion.service';
import { HighlightDirective } from './directives/highlight.directive';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    ReservetableComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,HttpModule,  BrowserAnimationsModule,
    MatToolbarModule,MatListModule,MatSlideToggleModule,
    FlexLayoutModule,MatGridListModule, MatSelectModule,
    MatCardModule, MatFormFieldModule,HttpClientModule,
    MatInputModule,MatProgressSpinnerModule,MatNativeDateModule,
    MatCheckboxModule,FormsModule,MatSliderModule,
    MatButtonModule,AppRoutingModule,MatDialogModule,MatRadioModule,MatDatepickerModule

  ],
  entryComponents: [LoginComponent,ReservetableComponent],
  providers: [DishService,LeaderService,ProcessHTTPMsgService,PromotionService,
  { provide:'BaseURL',useValue:baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
