import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-state',
  templateUrl: './menu-state.component.html',
  styleUrls: ['./menu-state.component.css']
})
export class MenuStateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  start() {
    this.router.navigate(['/start']);
  }

  join() {
    this.router.navigate(['/room']);
  }

}
