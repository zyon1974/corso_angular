import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
