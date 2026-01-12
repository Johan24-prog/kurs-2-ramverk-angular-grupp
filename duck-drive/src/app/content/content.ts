import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type View = 'home' | 'my-drive' | 'trash' | 'search';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  @Input() currentView!: View;
  @Input() items: any[] = [];
}
