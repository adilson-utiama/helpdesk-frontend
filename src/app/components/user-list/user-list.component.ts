import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { DialogService } from '../../dialog.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  page: number = 0;
  count: number = 5;
  pages: Array<number>;
  shared: SharedService;
  message: {};
  classCss: {};
  listUser = []; 

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private router: Router
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

}
