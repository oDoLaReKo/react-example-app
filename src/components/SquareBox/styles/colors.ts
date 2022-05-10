import { StyleSheet, css } from 'aphrodite';
export const colorStyles = StyleSheet.create({
    purple: {
        backgroundColor: '#9b5de5',
    },
    pink: {
        backgroundColor: '#f15bb5',
    },
    yellow: {
        backgroundColor: '#fee440',
    },
    blue: {
        backgroundColor: '#00bbf9',
    },
    green: {
        backgroundColor: '#00F5D4',
    },
    brown: {
        backgroundColor: '#964b00' 
    }
});

export type StyleColor = keyof typeof colorStyles;