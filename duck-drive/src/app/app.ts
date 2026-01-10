import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type DriveItem = {
  name: string;
  type: 'folder' | 'file';
};

type View = 'home' | 'my-drive' | 'trash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  items: DriveItem[] = [];
  currentView: View = 'home';

  constructor() {
    const saved = localStorage.getItem('duck-drive-items');
    if (saved) {
      this.items = JSON.parse(saved);
    }
  }

  setView(view: View) {
    this.currentView = view;
  }

  createFolder() {
    this.items = [
      ...this.items,
      {
        name: 'Nytt',
        type: 'folder',
      },
    ];
    this.save();
  }

  private save() {
    localStorage.setItem(
      'duck-drive-items',
      JSON.stringify(this.items)
    );
  }
}
