import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    main: {
        width: '200px',
        height: '200px',
        borderRadius: '100px',
        margin: '5px'
    },
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
    }
});

type StyleColor = keyof typeof styles;

type CircleProps = {
    color: string
}

export function Circle(props: CircleProps) {
    const { color } = props;

    return <div className={css(
        styles.main,
        styles[color as StyleColor],
    )} />;
}
