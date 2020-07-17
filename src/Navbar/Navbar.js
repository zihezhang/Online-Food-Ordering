import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from '../Styles/colours';
import {Title} from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed}; //bracket and dollar sign allows you to access js expressions inside this template
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

const Logo = styled(Title)`
    font-size: 20px;
    color:white;
`

export function Navbar(){
    return <NavbarStyled>
    <Logo>
        Rivvi
    </Logo>
    </NavbarStyled>;
}