
import { Component, signal, computed } from '@angular/core';
import { Conference } from '../../Models/conference';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confrence-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './confrence-list.html',
  styleUrl: './confrence-list.css',
})
export class ConfrenceList {

  favoriteCount = 0;

  // Signals
  likes = signal(0);
  doubleLikes = computed(() => this.likes() * 2);
  title = signal('Angular Workshop');

  // Event Binding : ajouter un favori
  addToFavorite() {
    this.favoriteCount++;
  }

  // Signal : incrémenter les likes
  incrementLikes() {
    this.likes.update(value => value + 1);
  }

  // Signal : réinitialiser les likes
  resetLikes() {
    this.likes.set(0);
  }

  // Inscription à une conférence
  register(conf: Conference) {
    if (conf.nbPlaces > 0) {
      conf.nbPlaces--;
    }
  }

  // Liste des conférences
  confList: Conference[] = [
    {
      id: 1,
      titre: 'Angular Workshop',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 30,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 12,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Business',
      nbLikes: 0,
    },
  ];
}
