import { Cell } from './Cell';
import { Colors } from './Colors';

export class Board {
  cells: Cell[][] = []; // array of rows and columns

  public initCells() {
    for (let i = 0; i < 8; i++) {
      // loop for columns
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        // loop for rows
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // black cell
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // white cell
        }
      }
      this.cells.push(row);
    }
  }
}
