import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&display=swap');

            :root {
                --taron-fill-orange: #fbb040;
                --taron-fill-white: #fff;
                --taron-fill-burgundy: #24000d;
                --taron-fill-light-grey: #b3b3b3;
                --taron-fill-coral: #944141;
                --taron-fill-black: #000;

                --font-family: "Inter", sans-serif;
                --second-family: "Noto Sans", sans-serif;
                --third-family: "Noto Serif Display", sans-serif;
            }

            * {
                margin: 0;
                padding: 0;
            }

            html, body {
                overflow-x: hidden;
                width: 100%;
            }
        `}
    />
);

export default GlobalStyles;