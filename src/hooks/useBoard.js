import { useReducer } from "react";
import { initializeBoard } from "../services/initializeBoard";

export function useBoard() {
  const [board, dispatch] = useReducer(moveReducer, initializeBoard());

  return [board, dispatch];

  function moveReducer(state, action) {
    switch (action.type) {
      case "MOVE_PLAYER_1":
        return state.map((column, i) => {
          if (i === action.i) {
            let index = column.indexOf(0);
            if (index === -1) return;
            column[index] = 1;
          }
          return column;
        });
      case "MOVE_PLAYER_2":
        return state.map((column, i) => {
          if (i === action.i) {
            let index = column.indexOf(0);
            if (index === -1) return;
            column[index] = 2;
          }
          return column;
        });
      default:
        return state;
    }
  }
}
