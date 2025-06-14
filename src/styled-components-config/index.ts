import * as styledComponents from 'styled-components';

const style = {
  default: styledComponents.default,
  css: styledComponents.css,
  ThemeProvider: styledComponents.ThemeProvider,
  ThemeContext: styledComponents.ThemeContext,
  createGlobalStyle: styledComponents.createGlobalStyle,
};

export const { css, createGlobalStyle, ThemeProvider, ThemeContext } = style;

export const GlobalStyle = createGlobalStyle`
    html {
      font-family: sans-serif; /* 1 */
      -ms-text-size-adjust: 100%; /* 2 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }

    audio,
    canvas,
    progress,
    video {
      display: inline-block; /* 1 */
      vertical-align: baseline; /* 2 */
    }

    audio:not([controls]) {
      display: none;
      height: 0;
    }

    [hidden],
    template {
      display: none;
    }

    a {
      background-color: transparent;
    }

    a:active,
    a:hover {
      outline: 0;
    }

    abbr[title] {
      border-bottom: 1px dotted;
    }

    b,
    strong {
      font-weight: bold;
    }

    p {
      margin: 0;
    }

    svg:not(:root) {
      overflow: hidden;
    }

    img {
					max-width: 100%;
					height: auto;
				}

    body {
      margin: 0;
      padding: 0;
      font-family: "Lena";
      font-weight: 400;

      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color:#F4EEE4;
      color: #702833;

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      a {
        color: black;
        transition: 0.3s ease-in-out;
        text-decoration: none;

        &:hover,
        &:focus {
          text-decoration: none;
          background-image: none;
        }
      }

      ul,
      li {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

    }

    .rhap_container  {
      position: fixed;
      bottom: 0;    
      left: 0;
      width: 100%;
      margin: 0 auto;   
      background-color: transparent;
      backdrop-filter: blur(40px);
      z-index: 10000;

      button {
        color: #702833;
      }

      .rhap_progress-filled {
        background-color: #702833;
      }

      .rhap_download-progress {
        background-color: #F4EEE4;
      }

      .rhap_progress-indicator {
        background-color: #702833;
      }
    }
`;
