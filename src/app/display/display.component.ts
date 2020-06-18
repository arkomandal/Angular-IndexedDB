import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  name: string = '';
  email: string = '';
  image: any;
  imageUrl: any;

  constructor(
    private dbService: NgxIndexedDBService,
    private activeRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['unique_id']) {
        this.dbService.getByKey('users', params['unique_id'])
          .then(result => {
            this.name = result['name'];
            this.email = result['email'];
            this.image = result['image'];
          })
          .finally(() => {
            let reader = new FileReader();
            reader.onloadend = () => {
              this.imageUrl = reader.result
            }
            reader.readAsDataURL(this.image);
          })
      };
    });
  }

  redirect_back(){
    this._location.back();
  }
  
}
