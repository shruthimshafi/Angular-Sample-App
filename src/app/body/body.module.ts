import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DataService } from '../data.service';
import { MyDataService } from '../service/my-data.service';

@NgModule({
  imports: [
    CommonModule,
    BodyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [],
  providers: [MyDataService]
})
export class BodyModule { }
