import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { useBoard } from "./hooks/useBoard";

export default function App() {
  const [board, dispatch] = useBoard();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [board]);

  return (
    <div>
      <Header>Die magischen Vier</Header>
      <Board>
        {board.map((column, i) => (
          <div
            data-testid={`column: ${i}`}
            key={i}
            onClick={() => handleClick(i)}
          >
            {column.map((element, i) => (
              <p data-testid={`row: ${i}`} key={i}>
                {element}
              </p>
            ))}
          </div>
        ))}
      </Board>
    </div>
  );

  function dropChip(i) {
    if (count % 2 === 0) {
      dispatch({ type: "MOVE_PLAYER_2", i });
    } else {
      dispatch({ type: "MOVE_PLAYER_1", i });
    }
  }

  function handleClick(i) {
    dropChip(i);
  }
}

const Board = styled.div`
  display: flex;
  border: 1px solid grey;
  width: fit-content;
  padding: 1em;
  margin-left: auto;
  margin-right: auto;

  div {
    display: flex;
    flex-direction: column-reverse;
  }

  p {
    width: 1em;
    height: 1em;
  }
`;
