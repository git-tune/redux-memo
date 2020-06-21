import { createGlobalStyle } from 'styled-components';
import { colors } from './variable';

const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1200px',
  desktop: '2560px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
       box-sizing: border-box;
       padding: 0;
       margin: 0; 
    }
    li {
        list-style-type: none;
    }
    a { 
        color: ${colors.black};
        text-decoration: none;
    }
    td {
        width: 250px;
    }
`;
