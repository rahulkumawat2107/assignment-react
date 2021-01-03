import './App.css';
import {useState,useEffect} from 'react'
import ShowTable from './ShowTable'
import PostForm from './PostForm'

function App() {

  const [data,setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(response => {
      //console.log("response",response)
      setData(response);
    })
  }, [])

  //console.log(data.orderId);
  const updateTable = (newData) => {
    console.log("new", newData);
    setData([...data,...newData])
  }

  return (
    <div className="App">

      <h1>Assignment</h1>

      {data.length === 0 ? <h1>Loading</h1> :
        <div>
        
          <PostForm updateTableFunction={updateTable}/>
          <button onClick={() => setShowTable(!showTable)}>Show Table</button>

          {
            showTable === false ? <h3>Click on button to see the Data</h3> : 
            <div className="table-design">
              <table id="content">
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
      }
    </div>
  );
}

export default App;
