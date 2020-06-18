import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule,DBConfig } from 'ngx-indexed-db';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const dbConfig:DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'image', keypath: 'image', options: { unique: false } }
    ]
  }],
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AddComponent,
    DisplayComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
