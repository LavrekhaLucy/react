import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./MyComponents/my-product/MyProduct.tsx";



function App() {


  return (
    <div className={'foo'}>
        {
          products.map( (product, index ) => <MyProduct key={index} product = {product}/>
         )
        }
    </div>
  )
}

export default App
