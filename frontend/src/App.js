import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProductListScreen from './screens/ProductListScreen';
import CreateProductScreen from './screens/CreateProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import EditProductScreen from './screens/EditProductScreen';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <main className='py-5'>
        <Container>
          <Switch>
            <Route path='/products/search/:keyword/page/:pageNumber'>
              <ProductListScreen user={user} />
            </Route>
            <Route path='/products/search/:keyword'>
              <ProductListScreen user={user} />
            </Route>
            <Route path='/products/page/:pageNumber'>
              <ProductListScreen user={user} />
            </Route>
            <Route path='/products/save/:id'>
              <EditProductScreen user={user} />
            </Route>
            <Route path='/products/save'>
              <CreateProductScreen user={user} />
            </Route>
            <Route path='/products/:id'>
              <ProductDetailsScreen user={user} />
            </Route>
            <Route path='/products'>
              <ProductListScreen user={user} />
            </Route>
            <Route path='/login'>
              <LoginScreen setUser={setUser} />
            </Route>
            <Redirect from='/' exact to='/products' />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
