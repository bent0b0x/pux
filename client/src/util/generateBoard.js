import piece from './pieceFactory';
import * as pieceTypes from '../game/util/Pieces';
import * as colors from '../game/util/Colors';

export default () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = 0;
    }
  }

  //Pawns
  for (let k = 0; k < 8; k++) {
    let color = k < board.length / 2 ? colors.BLACK : colors.WHITE;

    //Pawns
    if (k === 1 || k === board.length - 2) {
      for (let m = 0; m < board.length; m++) {
        board[k][m] = piece(color, pieceTypes.PAWN);
      }
    }

    if (k === 0 || k === board.length - 1) {
      for (let n = 0; n < board.length; n++) {
        //Rooks
        if (n === 0 || n === board.length - 1) {
          board[k][n] = piece(color, pieceTypes.ROOK);
        }
        //Knights
        if (n === 1 || n === board.length - 2) {
          board[k][n] = piece(color, pieceTypes.KNIGHT);
        }
        //Bishops
        if (n === 2 || n === board.length - 3) {
          board[k][n] = piece(color, pieceTypes.BISHOP);
        }
        //Queens
        if (n === 3) {
          board[k][n] = piece(color, pieceTypes.QUEEN);
        }
        //Kings
        if (n === 4) {
          board[k][n] = piece(color, pieceTypes.KING);
        }
      }
    }
  }

  return board;

}



