import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <div>lij</div>
    </React.Fragment>
  );
}

export default App;
