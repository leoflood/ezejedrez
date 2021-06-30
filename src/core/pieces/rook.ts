import Piece from './piece';
import Chess from './../chess';
import Movement from './../movement';
export default class Rook extends Piece {
  constructor(color: string) {
    // code smell
    super('rook', color);
  }

  protected __getMoveMovements(x: number, y: number, chess: Chess) {
    const movements: Movement[] = [];

    let x2, y2;

    // Top
    y2 = y + 1;
    while (this.__addIfValidMovement(x, y2, movements, chess)) {
      y2++;
    }

    // Bottom
    y2 = y - 1;
    while (this.__addIfValidMovement(x, y2, movements, chess)) {
      y2--;
    }

    // Left
    x2 = x - 1;
    while (this.__addIfValidMovement(x2, y, movements, chess)) {
      x2--;
    }

    // Right
    x2 = x + 1;
    while (this.__addIfValidMovement(x2, y, movements, chess)) {
      x2++;
    }

    return movements;
  }

  protected __getCaptureMovements(x: number, y: number, chess: Chess) {
    const movements: Movement[] = [];

    let x2, y2;

    // Top
    y2 = y + 1;
    while (
      chess.isAValidPosition(x, y2) &&
      !chess.isThereAllyPiece(this, x, y2) &&
      !this.__addIfValidCapture(x, y2, movements, this, chess)
    ) {
      y2++;
    }

    // Bottom
    y2 = y - 1;
    while (
      chess.isAValidPosition(x, y2) &&
      !chess.isThereAllyPiece(this, x, y2) &&
      !this.__addIfValidCapture(x, y2, movements, this, chess)
    ) {
      y2--;
    }

    // Left
    x2 = x - 1;
    while (
      chess.isAValidPosition(x2, y) &&
      !chess.isThereAllyPiece(this, x2, y) &&
      !this.__addIfValidCapture(x2, y, movements, this, chess)
    ) {
      x2--;
    }

    // Right
    x2 = x + 1;
    while (
      chess.isAValidPosition(x2, y) &&
      !chess.isThereAllyPiece(this, x2, y) &&
      !this.__addIfValidCapture(x2, y, movements, this, chess)
    ) {
      x2++;
    }

    return movements;
  }
}