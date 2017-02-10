// import { INCREMENT } from './actions';

// export interface IAppState {
//     counter: number;
// }

// export const INITIAL_STATE: IAppState = {
//     counter: 0
// };

import { TAKE_TURN, RESET } from './actions';
import { GameState } from './reducers/game';

export interface RootState {
    game: GameState;
}

export const BLANK_SYMBOL = '?';
export const PLAYER_ONE_SYMBOL = 'Y';
export const PLAYER_TWO_SYMBOL = 'N';
export const DRAW_SYMBOL = 'Nobody';

export const initialGameState: GameState = {
    playerOneSymbol: PLAYER_ONE_SYMBOL,
    playerTwoSymbol: PLAYER_TWO_SYMBOL,
    currentTurnSymbol: PLAYER_ONE_SYMBOL,
    board: [
        BLANK_SYMBOL, BLANK_SYMBOL, BLANK_SYMBOL,
        BLANK_SYMBOL, BLANK_SYMBOL, BLANK_SYMBOL,
        BLANK_SYMBOL, BLANK_SYMBOL, BLANK_SYMBOL,
    ],
    winner: null,
};

export const INITIAL_STATE: RootState = {
    game: initialGameState
};

// export function rootReducer(state: RootState, action): RootState {
//     switch (action.type) {
//         // case INCREMENT:
//         //     return { counter: state.counter + 1 };

//         default:
//             break;
//     }

//     return state;
// }
