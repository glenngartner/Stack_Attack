import { Component, OnInit } from '@angular/core';
import {PageLinks} from '../generic/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

/**
 * Navbar view component
 * Seems like overkill for just one link, but it was intended to contain more, like a project documentation view, for easy reference
 * Lack of time prevailed. Leaving this here to receive points for good intentions
 */
export class NavbarComponent implements OnInit {

  /**
   * Links to be displayed on the navbar
   */
  public links: PageLinks[] = [
    {name: 'Home', route: ''},
    // {name: 'Docs', route: 'docs'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
