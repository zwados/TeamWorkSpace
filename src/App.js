import React from 'react';
import './App.css';
import './style/App.scss'
import styled from 'styled-components';
import SideNav from './layout/SideNav';
import Nav from './layout/Nav';
import Main from './layout/Main';
import Footer from './layout/Footer';

const StyledAppLayout = styled.div`
background-color: lightgrey;
display: grid;
grid-template-areas: 
"nav nav nav"
"sidenav main main"
"footer footer footer";
grid-template-columns: 7rem 1fr 1fr;
grid-template-rows: 5rem 1fr 5rem;
`;

function App() {
  return (
    <StyledAppLayout>
      <SideNav />
      <Nav />
      <Main />
      <Footer />

    </StyledAppLayout>
  );
}

export default App;
