import { StyleSheet, css } from 'aphrodite';
import { colorStyles, StyleColor } from './styles/colors';

const styles = StyleSheet.create({
    main: {
        width: '200px',
        height: '200px',
        borderRadius: '10px',
        margin: '5px',
    },
});

type SquareProps = {
    color: string,
};

export function Square(props: SquareProps) {
  const { color } = props;
  return (
    <div className={css(
  styles.main,
        colorStyles[color as StyleColor],
    )}
    />
  );
}
