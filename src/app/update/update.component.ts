import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  unique_id: string = "";
  imageUrl: any;

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    image: [null, Validators.required],
    imageFakePath: [null]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dbService: NgxIndexedDBService,
    private activeRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['unique_id']) {
        this.unique_id = params['unique_id'];
        this.dbService.getByKey('users', params['unique_id'])
          .then(result => {
            this.profileForm.patchValue({
              name: result['name'],
              email: result['email'],
              image: result['image']
            });
          })
          .finally(() => {
            let reader = new FileReader();
            reader.onloadend = () => {
              this.imageUrl = reader.result
            }
            reader.readAsDataURL(this.profileForm.value.image);
          })
      };
    });
  }

  imageUpload(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.imageUrl = reader.result
      this.profileForm.patchValue({
        image: file
      });
    }
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.dbService.update('users', {
      id: this.unique_id,
      name: this.profileForm.value.name,
      email: this.profileForm.value.email,
      image: this.profileForm.value.image
    }).then(() => {
      this.router.navigate(['/list']);
    });
  }

  redirect_back(){
    this._location.back();
  }

}
