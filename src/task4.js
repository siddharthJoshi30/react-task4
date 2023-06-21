import React, { useState } from 'react'
import Axios from 'axios'


const Records = () => {
    const [data, setData] = useState([])

    const fetchRecords = () => {
        Axios.get("https://dummyjson.com/users").then((res) => {
            setData(res.data)
            console.log(res)
            console.log("records succesfully fetched")
            document.getElementById("p1").innerHTML = 'Check console for fetched documents'
        })
    }

    const display = () => {
        fetchRecords()
        // return(
        //     <table>
        //     <thead>
        //         <tr>
        //             <th>Id</th>
        //             <th>Name</th>
        //             <th>Address</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>{data[0].id}</td>
        //         </tr>
        //     </tbody>
        //     </table>
        // )
    }


    return(
        <div>
            <header><h2>Get Records and display in table format</h2></header>
            <main>
                <button onClick={display}>fetch Records</button>
               <p id="p1"></p>
            </main>
        </div>
    ) 
}

export default Records