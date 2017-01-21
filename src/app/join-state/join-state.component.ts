import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-state',
  templateUrl: './join-state.component.html',
  styleUrls: ['./join-state.component.css']
})
export class JoinStateComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enter() {
    this.router.navigate(['/lobby']);
  }

  back() {
    this.router.navigate(['/room']);
  }

}
