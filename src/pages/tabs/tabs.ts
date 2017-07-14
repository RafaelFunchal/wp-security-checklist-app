import { Component } from '@angular/core';

import { PtBr } from '../ptbr/ptbr';
import { En } from '../en/en';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PtBr;
  tab3Root = En;

  constructor() {

  }
}
