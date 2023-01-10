// import { useEffect , useState} from "react"
import makeApiCall from "./services/apiService"
// async function Sales() {
//     // const [sales, setSales] = useState([])
//     // useEffect(() => {
//     //     const retrivePayments = async () => {

//     //         const res = await makeApiCall('get','/payments')
//     //         setSales(res)
//     //     }
//     //    retrivePayments()
//     //    console.log(sales)
//     // }, [])
//     return (
//         <div>TEST</div>
//     )
//  }

//  export default Sales


import { useEffect , useState} from "react"
function Sales(){
         const [sales, setSales] = useState([])
     useEffect(() => {
          const retrivePayments = async () => {

          const res = await makeApiCall('get','/payments')
          setSales(res)
      }
     retrivePayments()
    //  console.log(sales)
   }, [])

   const renderSales = () => {
    return sales.map(({ sale_number, currency, description,link, amount,created_at},i) => {
    return <tr key={sale_number} >
    <td style={{ padding: '10px', border: '1px solid black' }}>{created_at}</td>
    <td style={{ padding: '10px', border: '1px solid black' }}>{sale_number}</td>
    <td style={{ padding: '10px', border: '1px solid black' }}>{description}</td>
    <td style={{ padding: '10px', border: '1px solid black' }}>{amount}</td>
    <td style={{ padding: '10px', border: '1px solid black' }}>{currency}</td>

  </tr>
  })
}
   const renderTable = () => {
    return (
        <div>
            
      <table>
          <thead>
        <tr>
            <th scope="col">time</th>
            <th scope="col">sale_number</th>
            <th scope="col">description</th>
            <th scope="col">amount</th>
            <th scope="col">currency</th>

        </tr>
    </thead>
        <tbody>
          {renderSales()}
        </tbody>
      </table>
      </div>
            )
  }


    return (
        <div>
        { renderTable()}
        </div>
    )
}

export default Sales