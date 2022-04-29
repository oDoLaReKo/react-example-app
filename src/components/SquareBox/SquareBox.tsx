import React from 'react';
import { Button, colors } from '@mui/material';
import { StyleSheet, css } from 'aphrodite';
import { Square } from './Square';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        margin: '25px'
    },
    control: {
        width: '100%',
        display: 'flex',
    },
    squares: {
        marginTop: '25px',
        display: 'flex',
        'child': {
            marginRight: '10px'
        }
    },
    square: {
        marginRight: '15px'
    }
});




export function SquareBox() {
    const id = React.useId();
        const [squares, setSquares] = React.useState<Array<string>>([]);
      
            
let deleteSquare=function(){
    
    squares.pop();
    setSquares(squares=>[...squares]);
  
    
};
    const addSquare = React.useCallback(() =>{ 
        setSquares(squares => ([
            ...squares,
            Object.values(COLORS)[Math.floor(Math.random()*Object.values(COLORS).length)]
            
            
        ]))
        
        
    }
    , [])


    return <div className={css(styles.main)}>
        <div className={css(styles.control)}>
        <Button onClick={deleteSquare} variant='contained'>REMOVE SQUARE</Button>
            <Button onClick={addSquare} variant='contained'>Add square</Button>
        </div>
        
        <div className={css(styles.squares)}>
            {squares.map((square, id) => <Square key={id} color={square} />)}
        </div>
       
    </div>;
}