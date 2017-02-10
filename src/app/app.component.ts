import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

// import { IAppState } from './store';
// import { INCREMENT } from './actions';

import { RootState } from './store';
import { GameState } from './reducers/game';
import { takeTurn, reset } from './actions/gameActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';

  // counter = 0;
  gameState: GameState;
  subscription;

  constructor(private ngRedux: NgRedux<RootState>) {
    // this.subscription = (
    //   ngRedux
    //     .select<number>('counter')
    //     .subscribe(newCounter => this.counter = newCounter)
    // );
    this.subscription = (
      ngRedux
        .select<GameState>('game')
        .subscribe(
        (newGameState: GameState) => {
          this.gameState = newGameState;
        }
        )
    );
  }

  ngOnInit() {
    this.handleReset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // increment() {
  //   this.ngRedux.dispatch({ type: INCREMENT });
  // }

  handleClick(index: number) {
    this.ngRedux.dispatch(takeTurn(index));
  }

  handleReset() {
    this.ngRedux.dispatch(reset());
  }
}
