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
    html {
      font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    }
    *, *:before, *:after {
       box-sizing: border-box;
       padding: 0;
       margin: 0; 
       background: ${colors.main};
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
    input {
      font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
      background: ${colors.main};
      border: none;
      outline: none;
      border-radius: 10px;
    }
`;
