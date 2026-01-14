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
  const newFolder: DriveItem = {
    id: this.generateId(),
    name: 'Nytt',
    type: 'folder',
  };
  this.items = [...this.items, newFolder];
  this.save();
}

  deleteItem(id: string) {
  const item = this.items.find(i => i.id === id);
  if (!item) return;
  
  // Lägg till deletedAt timestamp
  const deletedItem: DriveItem = {
    ...item,
    deletedAt: Date.now(),
  };
  // Flytta till papperskorgen
  this.trashItems = [...this.trashItems, deletedItem];
  // Ta bort från items
  this.items = this.items.filter(i => i.id !== id);
  this.save();
  this.saveTrash();
}

restoreItem(index: number) {
  const item = this.trashItems[index];
  // Ta bort deletedAt
  const restoredItem: DriveItem = {
    id: item.id,
    name: item.name,
    type: item.type,
  };
  // Lägg tillbaka i items
  this.items = [...this.items, restoredItem];
  // Ta bort från trashItems
  this.trashItems = this.trashItems.filter((_, i) => i !== index);
  this.save();
  this.saveTrash();
}
permanentDeleteItem(index: number) {
  // Ta bort permanent från papperskorgen
  this.trashItems = this.trashItems.filter((_, i) => i !== index);
  this.saveTrash();
}
emptyTrash() {
  // Töm hela papperskorgen
  this.trashItems = [];
  this.saveTrash();
}

//Skapar unika identifierare för varje fil/mapp
private generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
