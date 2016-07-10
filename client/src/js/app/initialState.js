import genBoard from '../util/generateBoard';
import genClock from '../util/generateClock';
import * as colors from './game/util/PieceColors';

export default {
  game: {
    started: false,
    active_space: false,
    board: genBoard(),
    turn: colors.WHITE,
    check: false,
    top: colors.WHITE,
    clock: genClock()
  },
  config: {
    app_name: 'Chex'
  }
}