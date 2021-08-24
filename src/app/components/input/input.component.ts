import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  code: string = '';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  // Al apretar enter se cambia el valor del input
  search(): void {
    this._router.navigate(['product/', this.code]);

  }

  isCode(): boolean {
    let regex = /^[0-9]*$/;
    if(regex.test(this.code)) return true;
    return false;
  }

}
