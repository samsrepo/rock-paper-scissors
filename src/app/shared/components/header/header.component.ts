import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppRoutes } from '../../constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  routes = AppRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
