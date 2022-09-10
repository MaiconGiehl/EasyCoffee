import { createGlobalStyle } from 'styled-components'
import coffeeBean from '../../assets/images/coffeeBean.svg'

import colors from './variables'

const { veryLightBrown } = colors

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    body {
        background-color: ${veryLightBrown};
        backgrouhnd-image: url(${coffeeBean});
        background-size: 600px;
        height: 100vw;
    }
`

export default GlobalStyle
