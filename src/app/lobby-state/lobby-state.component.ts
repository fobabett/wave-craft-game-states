import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-state',
  templateUrl: './lobby-state.component.html',
  styleUrls: ['./lobby-state.component.css']
})
export class LobbyStateComponent implements OnInit {
  players:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.players = ['player1', 'player2', 'player3'];
  }

  startGame() {
    this.router.navigate(['/game']);
  }

}
