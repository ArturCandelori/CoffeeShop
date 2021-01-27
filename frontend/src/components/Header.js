import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SearchBox from './SearchBox';

const Header = ({ user, setUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('@CoffeeShop:token');
    setUser(null);
    history.push('/login');
  };

  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand className='text-primary'>CoffeeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='m-auto'>
              {user ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to='/products'>
                <Nav.Link>Produtos</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products/save'>
                <Nav.Link>Adicionar produto</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ml-auto text-primary'>
              {user ? `Olá, ${user}` : 'Faça login para acessar o sistema'}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
