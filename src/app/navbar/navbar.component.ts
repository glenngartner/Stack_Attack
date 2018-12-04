import { Component, OnInit } from '@angular/core';
import {PageLinks} from '../generic/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * Links to be displayed on the navbar
   */
  public links: PageLinks[] = [
    {name: 'Home', route: ''},
    {name: 'Docs', route: 'docs'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
