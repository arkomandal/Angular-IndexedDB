import { Component, OnInit, HostListener } from '@angular/core';
import { TestService } from '../test.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import * as uuid from 'uuid';

@Component({
  selector: 'app-c-two',
  templateUrl: './c-two.component.html',
  styleUrls: ['./c-two.component.css']
})
export class CTwoComponent implements OnInit {
  data: string = '';

  constructor(
    private test_service: TestService,
    private dbService: NgxIndexedDBService) {
  }

  ngOnInit() {
    // this.dbService.deleteDatabase();
    const unique_id = sessionStorage.getItem('unique_id')
    if (unique_id) {
      this.dbService.getByKey('myTable', unique_id)
        .then(result => this.data = result['data'])
        .finally(() => {
          this.dbService.delete('myTable', unique_id);
          sessionStorage.removeItem('unique_id')
        });
    } else {
      let subscription = this.test_service.get_data().subscribe(data => this.data = data);
      subscription.unsubscribe();
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    const unique_id = uuid.v4();
    sessionStorage.setItem("unique_id", unique_id);
    this.dbService.add('myTable', {
      id: unique_id,
      data: this.data
    });
  }

}
