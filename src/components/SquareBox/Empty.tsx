import { css } from '@emotion/react';

const emptyStyles = css`
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 5px;
    border: 2px dashed gray;
`;
export default function Empty() {
  return <div css={emptyStyles} />;
}
