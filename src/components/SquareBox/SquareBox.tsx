import React from 'react';
import { Button } from '@mui/material';
import { StyleSheet, css } from 'aphrodite';
import { nanoid } from 'nanoid';
import { COLORS } from '../../constants/colors';
import { randomElement } from '../../functions/randomElement';
import { Circle } from './Circle';
import { Square } from './Square';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
  },
  control: {
    width: '100%',
    display: 'flex',
  },
  squares: {
    marginTop: '25px',
    display: 'flex',
    child: {
      marginRight: '10px',
    },
  },
  square: {
    marginRight: '15px',
  },
});

interface Shape {
  color: string;
  shape: string;
  id: string;
}

export function SquareBox() {
  const [squares, setSquares] = React.useState<Array<Shape>>([]);
  const deleteSquare = () => {
    squares.pop();
    setSquares(() => [...squares]);
  };
  const checkArray = () => {
    // console.log(squares.filter((item) => item.id !== squares[squares.length - 1].id));
    setSquares(() => [...squares.filter((item) => item.id !== squares[squares.length - 1].id)]);
  };
  const addCircle = () => {
    setSquares((prevValue) => ([
      ...prevValue, { color: randomElement(Object.values(COLORS)), shape: 'circle', id: nanoid() },
    ]
    ));
   // console.log(squares[squares.length - 1].id); // whay don't we have the newest circle in array?
     setTimeout(() => { checkArray(); }, 1000);
console.log(squares);
   // const deletShape= (id) => {squares.filter()}
  };
  const addSquare = React.useCallback(
    () => {
      setSquares((prevValue) => ([
        ...prevValue,
        { color: randomElement(Object.values(COLORS)), shape: 'square', id: nanoid() }]
      ));
        // setTimeout(() => { setSquares(() => [...squares]); }, 1000);
       console.log(squares);// empty array
       setTimeout(() => { checkArray(); }, 1000);
    },
    [],
  );
// const addShape = (shape) => { if (shape === 'circle') return addCircle(); return addCircle(); };
  return (
    <div className={css(styles.main)}>
      <div className={css(styles.control)}>
        <Button onClick={deleteSquare} variant="contained">REMOVE SQUARE</Button>
        <Button onClick={addSquare} variant="contained">Add square</Button>
        <Button onClick={addCircle} variant="contained">Add Circle</Button>
        <Button onClick={checkArray} variant="contained">Check array</Button>
      </div>

      <div className={css(styles.squares)}>
        {squares.map((square: Shape) => (
          square.shape === 'square'
          ? <Square key={square.id} color={square.color} />
          : <Circle key={square.id} color={square.color} />))}
      </div>
    </div>
  );
}
