import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-archive',
  imports: [],
  templateUrl: './archive.html',
  styleUrl: './archive.css',
})
export class Archive implements OnInit {
  year!: string;
  month!: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  takeMeHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.year = this.route.snapshot.params['year'];
    this.month = this.route.snapshot.params['month'];

  }
}
