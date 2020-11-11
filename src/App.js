import logo from './logo.svg';
import Product from './components/Product'
import { products } from './constants/Products'

function App() {
  return (
    <div className="App">
      {
        products.map(item => (
          <Product key={ item.id.toString() } name={ item.name } />
        ) )
      }
    </div>
  );
}

export default App;
