import { LobbyStateComponent } from './lobby-state';
import { StartStateComponent } from './start-state';
import { GameStateComponent } from './game-state';
import { JoinStateComponent } from './join-state';
import { RoomStateComponent } from './room-state';
import { MenuStateComponent } from './menu-state';

export const AppRoutes = [
  { path: 'lobby', component: LobbyStateComponent },
  { path: 'start', component: StartStateComponent },
  { path: 'game', component: GameStateComponent },
  { path: 'join', component: JoinStateComponent },
  { path: 'room', component: RoomStateComponent },
  { path: 'menu', component: MenuStateComponent }
]
