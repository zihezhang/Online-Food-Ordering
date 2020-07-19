import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Order } from './Order/Order';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <React.Fragment>
      <GlobalStyle/>
      <FoodDialog openFood = {openFood} setOpenFood={setOpenFood}/>
      <Navbar/>
      <Order/>
      <Banner/>
      <Menu setOpenFood={setOpenFood}/>
    </React.Fragment>
  );
}

export default App;
