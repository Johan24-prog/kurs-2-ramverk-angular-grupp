import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type View = 'home' | 'my-drive' | 'trash';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() currentView!: View;

  @Output() viewChange = new EventEmitter<View>();
  @Output() createFolder = new EventEmitter<void>();
}
