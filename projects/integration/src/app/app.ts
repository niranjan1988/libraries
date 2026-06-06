import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  employees = [
    { id: 1, name: 'Alice Johnson', role: 'Frontend Engineer', department: 'Engineering', salary: 95000, status: 'Active' },
    { id: 2, name: 'Bob Martinez', role: 'Product Manager', department: 'Product', salary: 110000, status: 'Active' },
    { id: 3, name: 'Carol Chen', role: 'UX Designer', department: 'Design', salary: 88000, status: 'On Leave' },
    { id: 4, name: 'David Kim', role: 'Backend Engineer', department: 'Engineering', salary: 102000, status: 'Active' },
    { id: 5, name: 'Eva Russo', role: 'Data Analyst', department: 'Analytics', salary: 79000, status: 'Active' },
    { id: 6, name: 'Frank Obi', role: 'DevOps Engineer', department: 'Engineering', salary: 98000, status: 'Active' },
    { id: 7, name: 'Grace Liu', role: 'QA Engineer', department: 'Engineering', salary: 85000, status: 'Inactive' },
    { id: 8, name: 'Hiro Tanaka', role: 'Tech Lead', department: 'Engineering', salary: 130000, status: 'Active' },
  ];
}
