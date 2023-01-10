import {useRef, useState} from 'react'
import './App.css';
import makeApiCall from './services/apiService';
import Sales from './Sales';
function App() {

  const productRef = useRef(null);
  const priceRef = useRef(null);
  const currencyRef = useRef(null);
  const iframeRef = useRef(null);
  const [iframeState, setIframeState] = useState(false)
  const [showSales, setShowSales] = useState(false)
  async function handleClick(){
   const res =  await makeApiCall('post','/payment',{
      sale_price:priceRef.current.value,
      product_name:productRef.current.value,
      currency:currencyRef.current.value
    })

    console.log({
      sale_price:priceRef.current.value,
      product_name:productRef.current.value,
      currency:currencyRef.current.value
    })
    console.log(res.sale_url)
    iframeRef.current.src = res.sale_url
    setIframeState(true)
  }
function showForm(){
  return (
    <div className="app">
    <h1>New Dale Creation</h1>
    <div>
      <div>
      <span>Product name</span><input ref={productRef} />
      </div>
      <div>
      <span>Price</span><input ref={priceRef}/>
      </div>
      <div>
      <span>Currency</span>
      <select ref={currencyRef}>
      <option value="ILS">ILS</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      </select>
      </div>
      <button onClick={handleClick}>insert payment details</button>
    </div>
    </div>
  )
}

function showSalesPage(){
  setShowSales(true)
}
  return (
    <div>
      <div onClick={showSalesPage}>navigate to sales table</div>
      {showSales? <Sales /> :null}
    {!iframeState && !showSales? showForm():null}
      
      <iframe
        ref={iframeRef} 
        title="iframe" 
        width="100%" 
        height="500" 
        frameBorder="0" 
      />
      </div>

    
  );
}

export default App;
