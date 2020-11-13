import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateProduct from './pages/CreateProduct'
import Counter from './pages/Counter';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import Process from './context/Process';
import NagivationBar from './components/NavigationBar';
import Cart from './pages/Cart';

ReactDOM.render(
  <Process>
    <BrowserRouter>
      <NagivationBar />
      <Switch>
        <Route path="/" exact component={ App } />
        <Route path="/counter" component={Counter} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/page_two/:name" component={PageTwo} />
        {/* es otra manera de usar el Route */}
        <Route path="/page_one">
          <PageOne />
        </Route>
      </Switch>
    </BrowserRouter>
  </Process>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
