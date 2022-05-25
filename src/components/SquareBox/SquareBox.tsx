import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { StyleSheet, css } from 'aphrodite';
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
}
export function SquareBox() {
  //const [pom, setPom] = React.useState(0);
  const id = React.useId();
  const [squares, setSquares] = React.useState<Array<Shape>>([]);
  const addCircle = () => {
    setSquares(() => ([
      ...squares, { color: randomElement(Object.values(COLORS)), shape: 'circle' },
    ]
    ));
    //setPom(pom+1);
  };

  const deleteSquare = () => {
    squares.pop();
    setSquares(() => [...squares]);
  };
  const addSquare = React.useCallback(
    () => {
      setSquares((squares) => ([
        ...squares,
        { color: randomElement(Object.values(COLORS)), shape: 'square' }]
      ));
     
    },
    [],
  );
    //useEffect(() => { setTimeout(() => { deleteSquare(); console.log('why is rendering?'); }, 4000); }, [pom]);
  return (
    <div className={css(styles.main)}>
      <div className={css(styles.control)}>
        <Button onClick={deleteSquare} variant="contained">REMOVE SQUARE</Button>
        <Button onClick={addSquare} variant="contained">Add square</Button>
        <Button onClick={addCircle} variant="contained">Add Circle</Button>
      </div>

      <div className={css(styles.squares)}>
        {squares.map((square: Shape) => (square.shape === 'square'
          ? <Square key={id} color={square.color} /> : <Circle key={id} color={square.color} />))}
      </div>
    </div>
  );
}
