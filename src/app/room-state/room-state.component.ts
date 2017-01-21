import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-state',
  templateUrl: './room-state.component.html',
  styleUrls: ['./room-state.component.css']
})
export class RoomStateComponent implements OnInit {
  rooms:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.rooms = ['room1', 'room2'];
  }

  join() {
    this.router.navigate(['/join']);
  }

  back() {
    this.router.navigate(['/start']);
  }

}
