import React from 'react';
import { Button } from '@mui/material';
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
    const addSquare = React.useCallback(() => {
        setSquares(squares => ([
            ...squares,
            COLORS.GREEN
        ]))
    }, [])

    return <div className={css(styles.main)}>
        <div className={css(styles.control)}>
            <Button onClick={addSquare} variant='contained'>Add square</Button>
        </div>
        <div className={css(styles.squares)}>
            {squares.map((square, i) => <Square key={id} color={square} />)}
        </div>
    </div>;
}