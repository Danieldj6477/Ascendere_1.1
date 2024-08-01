import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CourseListComponent {

  constructor(private router: Router) {}

  enterCourse(courseId: string) {
    this.router.navigate([`/${courseId}`]);
  }
}
