import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-one',
  templateUrl: './c-one.component.html',
  styleUrls: ['./c-one.component.css']
})
export class COneComponent implements OnInit {
  data: string = '';

  constructor(
    private test_service: TestService,
    private router: Router) {
  }

  ngOnInit() { }

  submit() {
    this.test_service.set_Data(this.data);
    this.router.navigate(['/c-two']);
  }

}
