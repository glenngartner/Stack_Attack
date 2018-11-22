import { Component, OnInit } from '@angular/core';
import {PageLinks} from '../generic/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public links: PageLinks[] = [
    {name: 'Home', route: ''},
    {name: 'Docs', route: ''}

  ];

  constructor() { }

  ngOnInit() {
  }

}
