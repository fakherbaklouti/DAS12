
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './core/header/header';
import { Home } from './core/home/home';
import { Footer } from './core/footer/footer';
import { ConfrenceList } from './core/confrence-list/confrence-list';

import { UserProfile } from './core/user-profile/user-profile';
import { FriendsList } from './core/friends-list/friends-list';
import { Notifications } from './core/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Home,
    Footer,
    ConfrenceList,
    UserProfile,
    FriendsList,
    Notifications
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DAS12');
}
