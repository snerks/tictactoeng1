import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  counter = 0;
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.subscription = (
      ngRedux
        .select<number>('counter')
        .subscribe(newCounter => this.counter = newCounter)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
