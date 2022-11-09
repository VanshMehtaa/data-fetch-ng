import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
})
export class UserdataComponent implements OnInit {
  users: any;

  constructor(private userdataService: UserdataService) {}

  ngOnInit(): void {
    this.userdataService.getData().subscribe((data) => {
      this.users = data;
    });
  }
}
