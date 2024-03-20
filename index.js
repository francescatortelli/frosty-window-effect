import { createGlobalStyle, css } from 'styled-components';

const defaultOptions = {
  blur: 5, // default blur radius in px
  opacity: 0.4, // default background opacity
  borderRadius: 8, // default border-radius in px
  borderColor: 'rgba(255, 255, 255, 0.18)', // default border color
};

const generateFrostyStyle = ({ blur, opacity, borderRadius, borderColor }) => css`
  backdrop-filter: blur(${blur}px);
  background-color: rgba(255, 255, 255, ${opacity});
  border-radius: ${borderRadius}px;
  border: 1px solid ${borderColor};
`;

const FrostyWindowEffect = createGlobalStyle`
  .frosty {
    ${({ options }) => generateFrostyStyle({ ...defaultOptions, ...options })}
  }
`;

export { FrostyWindowEffect };
