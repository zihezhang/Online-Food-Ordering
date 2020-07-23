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
    display: flex;
    justify-content: space-between;
`

const Logo = styled(Title)`
    font-size: 20px;
    color:white;
`

const UserStatus = styled.div`
    color: white;
    font-size: 14px;
    margin-right: 30px;
`

const LoginButton = styled.span`
    cursor: pointer;
`

export function Navbar({login, loggedIn, logout}){
    return <NavbarStyled>
        <Logo>
            Rivvi
        </Logo>
        <UserStatus>
            {loggedIn !=='loading' ? (
                <React.Fragment>
                    {loggedIn ? `Hello ${loggedIn.displayName}` : ""} 
                    {loggedIn ? (
                        <LoginButton onClick = {logout}> Log out</LoginButton>
                    ) : (
                        <LoginButton onClick = {login}> Log in / Sign up</LoginButton>
                    )}
                </React.Fragment>
                ) : (
                    "loading..."
                )}
        </UserStatus>
    </NavbarStyled>;
}