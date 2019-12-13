import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlateComponent } from './plate/plate.component';
import { SushiComponent } from './sushi/sushi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PlateComponent, SushiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
