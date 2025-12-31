import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public archives: { year: number, month: number }[] = [
    { year: 2022, month: 12 },
    { year: 2022, month: 11 },
    { year: 2022, month: 10 }
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
