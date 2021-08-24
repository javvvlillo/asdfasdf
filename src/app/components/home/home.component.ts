import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scannerText: string = 'Escanear';
  writeText: string = 'Digitar';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this._router.navigate([route]);
  }

}
