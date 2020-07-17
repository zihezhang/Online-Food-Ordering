import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar/>
      <Banner/>
      <div>lij</div>
    </React.Fragment>
  );
}

export default App;
