import React from 'react';
import { Button } from '@mui/material';
import { StyleSheet, css } from 'aphrodite';
import { Square } from './Square';
import { COLORS } from '../../constants/colors';
import { randomElement } from '../../functions/randomElement';
import { Circle } from './Circle';
import { color } from '@mui/system';

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

        const [squares, setSquares] = React.useState<Array<Object>>([]);
const addCircle=function(){
   
    setSquares(squares => ([
        ...squares,
        {color: randomElement(Object.values(COLORS)),type:'circle'}]
        
        
    ))
 

}
            
const deleteSquare=function(){
    
    squares.pop();
    setSquares(squares=>[...squares]);
  
    
};
    const addSquare = React.useCallback(() =>{         
        setSquares(squares => ([
            ...squares,
            {color:randomElement(Object.values(COLORS)),type:'square'}]
            
            
        ))
        
        
    }
    , [])


    const addSquare = React.useCallback(
        () => {
            setSquares(squares => ([
                ...squares,
                randomElement(Object.values(COLORS))]
            ))
        }, []);

    return <div className={css(styles.main)}>
        <div className={css(styles.control)}>
            <Button onClick={deleteSquare} variant='contained'>REMOVE SQUARE</Button>
            <Button onClick={addSquare} variant='contained'>Add square</Button>
            <Button onClick={addCircle} variant='contained'>Add Circle</Button>
        </div>

        <div className={css(styles.squares)}>

           
        {squares.map((square, id) =>{if(square.type=='square') return <Square key={id} color={square.color}/> 
        else if(square.type=='circle') return <Circle key={id} color={square.color}/>
    
}
       )}
        
            
        </div>
       
    
       
    </div>;}

            
