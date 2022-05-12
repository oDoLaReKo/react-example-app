import { StyleSheet, css } from 'aphrodite';
import { colorStyles, StyleColor } from './styles/colors';

const styles = StyleSheet.create({
    main: {
        width: '200px',
        height: '200px',
        borderRadius: '100px',
        margin: '5px',
    },
});

type CircleProps = {
    color: string
};

export function Circle(props: CircleProps) {
    const { color } = props;
return (
  <div className={css(
        styles.main,
        colorStyles[color as StyleColor],
    )}
  />
);
}
