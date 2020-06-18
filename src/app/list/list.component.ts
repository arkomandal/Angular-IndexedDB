import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];

  constructor(
    private dbService: NgxIndexedDBService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.load_items();
  }

  load_items() {
    this.dbService.getAll('users')
      .then(result => {
        this.data = result;
      })
      .finally(() => {
        for (let item of this.data) {
          let reader = new FileReader();
          reader.onloadend = () => {
            item.imageUrl = reader.result
          }
          reader.readAsDataURL(item.image);
        }
      });
  }

  add() {
    this.router.navigate(['/add']);
  }

  display(unique_id) {
    this.router.navigate(['/display/', unique_id]);
  }

  update(unique_id) {
    this.router.navigate(['/edit/', unique_id]);
  }

  delete(unique_id) {
    if (confirm("Are you sure?")) {
      this.dbService.delete('users', unique_id)
        .then(() => {
          this.load_items();
        });
    }
  }

}
