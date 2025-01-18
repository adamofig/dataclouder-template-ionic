import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { DCLessonListComponent } from '@dataclouder/lessons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DCLessonListComponent],
})
export class ExplorePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
