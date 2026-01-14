import { RightRail } from './right-rail/right-rail';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from './sidebar/sidebar';
import { Topbar } from './topbar/topbar';
import { View, DriveItem } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar, Topbar, RightRail], // 👈 HÄR
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  items: DriveItem[] = [];
  trashItems: DriveItem[] = [];
  currentView: View = 'my-drive';
  searchQuery: string = '';
  searchResults: DriveItem[] = [];

  constructor() {
    const saved = localStorage.getItem('duck-drive-items');
    if (saved) {
      this.items = JSON.parse(saved);
      // Lägg till ID för gamla items som saknar det (bakåtkompatibilitet)
      this.items = this.items.map(item => ({
        ...item,
        id: item.id || this.generateId(),
      }));
      this.save(); // Spara med ID:n
    }
    const savedTrash = localStorage.getItem('duck-drive-trash');
    if (savedTrash) {
      this.trashItems = JSON.parse(savedTrash);
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

  deleteItem(index: number) {
    this.items = this.items.filter((_, i) => i !== index);
    this.save();
  }

  performSearch() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
    } else {
      this.searchResults = this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  private save() {
    localStorage.setItem(
      'duck-drive-items',
      JSON.stringify(this.items)
    );
  }
}
