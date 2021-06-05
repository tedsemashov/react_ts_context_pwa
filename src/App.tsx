import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { AboutUs } from './pages/about/AboutUs';
import { Footer } from './components/footer/Footer';
import { StateProvider } from './store';

const App: React.FC = () => (
  <BrowserRouter>
      <StateProvider>
          <div className="App">
              <Header/>
              <Switch>
                  <Route component={Main} path='/' exact />
                  <Route component={AboutUs} path='/products' />
              </Switch>
              <Footer/>
          </div>
      </StateProvider>
  </BrowserRouter>
);

export default App;
