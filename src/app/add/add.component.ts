import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  imageUrl: any = "";
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    image: [null, Validators.required],
    imageFakePath: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dbService: NgxIndexedDBService,
    private _location: Location
  ) { }

  ngOnInit() { }

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
    const unique_id = uuid.v4();
    this.dbService.add('users', {
      id: unique_id,
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
