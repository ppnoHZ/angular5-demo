import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { HighlightDirective } from './highlight.directive';
import { TstPipe } from './tst.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    HighlightDirective,
    TstPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  output(event): void {

  }
}
