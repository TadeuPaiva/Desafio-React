import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #312E38;

}

body, input, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
}

button:hover {
    cursor: pointer;
    opacity: 0.7;
}
`;