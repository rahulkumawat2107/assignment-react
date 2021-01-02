import './App.css';
import {useState,useEffect} from 'react'
import ShowTable from './ShowTable'
import PostForm from './PostForm'

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(response => {
      //console.log("response",response)
      setData(response);
    })
  }, [])

  //console.log(data.orderId);

  return (
    <div className="App">
      {data.length === 0 ? <h1>Loading</h1> :
        <div>
          <PostForm />


          <table>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Amount</th>
            </tr>
            <tbody>
              {data.map(val => <ShowTable orderId={val.orderId} quantity={val.quantity} itemName={val.itemName} totalAmount={val.totalAmount}/>)}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default App;
