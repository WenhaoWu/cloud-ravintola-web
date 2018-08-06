import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { ClientRoutes } from '../client-routing.module';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([`${ClientRoutes.home}`]);
  }

}
