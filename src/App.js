import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

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
      <Menu/>
      <div>lij</div>
    </React.Fragment>
  );
}

export default App;
