import { combineReducers } from 'redux';

import { RootState } from '../store';
import game from './game';

export default combineReducers<RootState>({
    game
});
