import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent, // Declare the root component
    CoursesComponent
  ],
  imports: [
    BrowserModule // Import BrowserModule for browser-specific features
  ],
  providers: [], // Define any application-wide services here
  bootstrap: [AppComponent] // Specify the root component to bootstrap
})
export class AppModule {}
