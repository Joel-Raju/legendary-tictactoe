import React from 'react';
import GameBoard from './GameBoard';
import styled from 'styled-components';

const StyledGame = styled.div`
  border-radius: 3px;

  row {
    display: flex;
    flex-direction: row;
  }
`;

const getInitialGameState = () => {
  const gameBoardCount = 9;
  const gridSize = 3;
  const initialState = new Array(gameBoardCount);
  for (let board = 0; board < gameBoardCount; board++) {
    const rowCount = gridSize;
    const gameGrid = new Array(3);
    for (let j = 0; j < rowCount; j++) {
      gameGrid[j] = new Array(gridSize);
    }
    initialState[board] = gameGrid;
  }

  return initialState;
};

const Game: React.FC = () => {
  const gameBoardCount = 9;
  const [gameState, setGameState] = React.useState(getInitialGameState());

  const makeMove = (boardIndex: number, row: number, col: number) => {
    console.log(boardIndex, row, col);
  };

  const isGameBoardWon = (boardIndex: number) => false;

  const isGameWon = () => {
    return (
      (isGameBoardWon(0) && isGameBoardWon(1) && isGameBoardWon(2)) ||
      (isGameBoardWon(3) && isGameBoardWon(4) && isGameBoardWon(5)) ||
      (isGameBoardWon(6) && isGameBoardWon(7) && isGameBoardWon(8)) ||
      (isGameBoardWon(0) && isGameBoardWon(3) && isGameBoardWon(6)) ||
      (isGameBoardWon(1) && isGameBoardWon(4) && isGameBoardWon(7)) ||
      (isGameBoardWon(2) && isGameBoardWon(5) && isGameBoardWon(8)) ||
      (isGameBoardWon(0) && isGameBoardWon(4) && isGameBoardWon(8)) ||
      (isGameBoardWon(2) && isGameBoardWon(4) && isGameBoardWon(6))
    );
  };

  const renderGameBoards = () => {
    const gridSize = 3;
    const gameBoards: any = [];

    for (let row = 0, boardIndex = 0; row < gridSize; row++) {
      const rowBoards = [];
      (bIndex => {
        console.log('bIndex', bIndex);
        for (let col = 0; col < gridSize; col++) {
          rowBoards.push(
            <GameBoard
              key={row + col}
              gameState={gameState[boardIndex]}
              isWon={false}
              onClick={(row, col) =>
                (bIdx => {
                  makeMove(bIdx, row, col);
                })(bIndex)
              }
            />
          );
          boardIndex++;
        }
        gameBoards.push(
          <div className='row' key={row}>
            {rowBoards}
          </div>
        );
      })(boardIndex);
    }

    return gameBoards;
  };

  return <StyledGame>{renderGameBoards()}</StyledGame>;
};

export default Game;
