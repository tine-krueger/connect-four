import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { useBoard } from "./hooks/useBoard";

export default function App() {
  const [board, dispatch] = useBoard();

  return (
    <div>
      <Header>Die magischen Vier</Header>
      <Board>
        {board.map((column, i) => (
          <div
            data-testid={`column: ${i}`}
            key={i}
            onClick={() => handleClick(column, i)}
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

  function handleClick(column, i) {
    console.log(i);
    for (let element of column) {
      if (element === 0) {
        //do something and break
      }
    }
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
