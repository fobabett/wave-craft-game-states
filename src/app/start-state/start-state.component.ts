import { Component, OnInit } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-state',
  templateUrl: './start-state.component.html',
  styleUrls: ['./start-state.component.css']
})
export class StartStateComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  create() {
    // let ws = new $WebSocket('ws://localhost:8080');
    let OP = 'CREATE';
    // ws.send({ OP }).subscribe(
    //   (msg) => {
    //     console.log(msg.data);
    //   }
    // )
    this.router.navigate(['/lobby']);
  }

  back() {
    this.router.navigate(['/menu']);
  }

}
