import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxIndexedDBModule,DBConfig } from 'ngx-indexed-db';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';
import { NotFoundComponent } from './not-found/not-found.component';

const dbConfig:DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'myTable',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'data', keypath: 'data', options: { unique: false } }
    ]
  }],
};

@NgModule({
  declarations: [
    AppComponent,
    COneComponent,
    CTwoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
