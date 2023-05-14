import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link,useNavigate,useLocation, json } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from '@mui/material';
// import {Button} from '@mui/material';
export function DefaultConfiguration(){
    const [vehicleArr, setVehicleArr] = useState([]);
    // const [ctype,setCtype]=useState([]);
    const vehListCType = vehicleArr.filter(obj=> obj.compType=='C').map(obj=>obj.compName) 
    sessionStorage.setItem("vehListCType",JSON.stringify(vehListCType))
    console.log("vehListCType");
    console.log(vehListCType)
    const vehListSType = vehicleArr.filter(obj=> obj.compType=='S').map(obj=>obj.compName)
    sessionStorage.setItem("vehListSType",JSON.stringify(vehListSType))
    console.log("vehListSType");
    console.log(vehListSType)
    const vehListIType = vehicleArr.filter(obj=> obj.compType=='I').map(obj=>obj.compName)
    sessionStorage.setItem("vehListIType",JSON.stringify(vehListIType))
    console.log("vehListIType");
    console.log(vehListIType)
    const vehListEType = vehicleArr.filter(obj=> obj.compType=='E').map(obj=>obj.compName)
    sessionStorage.setItem("vehListEType",JSON.stringify(vehListEType))
    console.log("vehListEType");
    console.log(vehListEType)
    
    
    
    
const location = useLocation();

let [vehname] = vehicleArr;

    const modelName = vehname?.modelName;
    const modelPrice = vehname?.modelPrice;
    const imagePath = vehname?.imagePath;
    console.log(imagePath);
    if (vehname !== undefined && vehname !== null) {
        const modelName = vehname.modelName;
    }

    const confPageSession = JSON.stringify(vehicleArr);
    sessionStorage.setItem("getConf",confPageSession);
const navigate = useNavigate();
console.log("modelIdSession")
console.log(sessionStorage.getItem("modelIdSession"))
// const { code } = useParams();
    useEffect(() => {
    
        // axios.get('https://localhost:44313/api/VehicleMasters/'+sessionStorage.getItem("modelIdSession"))
        axios.get('http://localhost:8080/api/vehiclesById/'+sessionStorage.getItem("modelIdSession"))
          .then(response => {
            setVehicleArr(response.data);
            console.log("Vehicle by model fetch")
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const toComponentB=()=>{
        navigate('/StandardPage',{state:{id:1,name:vehicleArr}});
          }

    return(
    <div>
        
        <div className="content-container">

<div class="grid-container">
  <div class="grid-item">


  <div>
                <label><b>Standard Feature</b></label>
                <ul>
                    {vehListSType.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <label><b>Core Feature</b></label>
                <ul>
                    {vehListCType.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            <label><b>Interior</b></label>
            <ul>
                {vehListIType.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <label><b>Exterior</b></label>
            <ul>
                {vehListEType.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
  </div>
  <div class="grid-item-img">
  <b> <h1 align="center"> {modelName}</h1></b>
            <br/>
    <img className="right-text" src={"/" + imagePath} alt="image" height={300} width={500} />

    <br></br>

    <p><b>Base Price : Rs.</b>{modelPrice}</p>

<p><b>S.T @12%:  Rs.</b>{modelPrice * 0.12}</p>
<p><b>Total: Rs.</b>{modelPrice + (modelPrice * 0.12)}</p>

</div>
    </div>
    {/* <br></br><br></br> */}
    {/* <br></br><br></br> */}
    <a href='/InvoicePage' className="mr-4">
                    {/* <button type="button">Modify</button> */}
                    <Button variant="contained">Confirm Order</Button>
                </a>

                <a href='/SegmentPage' className="mr-4">
                    {/* <button type="button">Modify</button> */}
                    <Button variant="contained">Modify</Button>
                </a>
     
    <a onClick={()=>{toComponentB()}} className="mr-4">
        {/* <button type="button">Configure</button> */}
        <Button variant="contained">Configure</Button>
        </a>
        <br></br><br></br>
    </div>
    </div>
  );
}


// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import { Link,useNavigate,useLocation } from "react-router-dom";
// import Form from 'react-bootstrap/Form'
// // import {Button} from '@mui/material';
// export function DefaultConfiguration(){
//     const [vehicleArr, setVehicleArr] = useState([]);
//     // const [ctype,setCtype]=useState([]);
//     const vehListCType = vehicleArr.filter(obj=> obj.compType=='C').map(obj=>obj.compName)
//     const vehListSType = vehicleArr.filter(obj=> obj.compType=='S').map(obj=>obj.compName)
//     const vehListIType = vehicleArr.filter(obj=> obj.compType=='I').map(obj=>obj.compName)
//     const vehListEType = vehicleArr.filter(obj=> obj.compType=='E').map(obj=>obj.compName)
    
    
//     // const 
//     // let str='C';
//     // const vehListCType = vehicleArr.map((item,key)=> <li key={key}>{(item.compType =='C')}</li>)
//     // const vehListCType1 = vehicleArr.map((item,key)=> console.log((item.compType =='C') && item.compType))
//     // console.log('VehList'+vehListCType);
    
// const location = useLocation();
// const navigate = useNavigate();

// // const { code } = useParams();
//     useEffect(() => {
    
//         axios.get('https://localhost:7148/api/VehicleMasters/'+location.state.name)
//           .then(response => {
//             setVehicleArr(response.data);
//             console.log(response.data)
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }, []);
//     //   useEffect(() => {
    
//     //     axios.get('https://localhost:7148/api/ComponentMasters/')
//     //       .then(response => {
//     //         setComponentArr(response.data);
//     //         console.log(response.data)
//     //       })
//     //       .catch(error => {
//     //         console.log(error);
//     //       });
//     //   }, []);
//     // let [modName] = vehicleArr;
//     // console.log(modName.modelName);
//     const toComponentB=()=>{
//         navigate('/StandardPage',{state:{id:1,name:vehicleArr}});
//           }

//     return(
//     <div>
//         {/* {location.state.name} */}
//         {/* {vehicleArr.modelName} */}
        
//         {/* <p><b>{modName.modelName}</b></p> */}
        
//                 <label><b>Core Feature</b></label>
//         <ul>
//         {vehListCType.map((item)=>(
//                     <li>{item}</li>
//                 ))}
//                 </ul>
//                 <label><b>Standard Features</b></label>
//         <ul>
//         {vehListSType.map((item)=>(
//                     <li>{item}</li>
//                 ))}
//                 </ul>
//                 <label><b>Interior Features</b></label>
//         <ul>
//         {vehListIType.map((item)=>(
//                     <li>{item}</li>
//                 ))}
//                 </ul>
//                 <label><b>Exterior Features</b></label>
//         <ul>
//         {vehListEType.map((item)=>(
//                     <li>{item}</li>
//                 ))}
//                 </ul>
//                 <a href='/SegmentPage'>
//                     <button type="button">Modify</button>
//                 </a>
//                 {/* <a href='/StandardPage'>
//                     <button type="button">Config</button>
//                 </a> */}

//       {/* <Link to={{
//       pathname: '/StandardPage',
//       state:{id:1,name:"vehicleArr"}}
//     } ><button type="button" >Config</button></Link> */}
//     {/* <a onClick={()=>{toComponentB()}}><a/> */}
//     <a onClick={()=>{toComponentB()}}><button type="button">Configure</button></a>
//         {/* <table>
//             <thead>
//             <tr>
//             <th>Model Id</th>
//             <th>Comp Id</th>
//             <th>Standerd</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {vehListCType.map((item)=>(
//                     <tr>{item}</tr>
//                 ))}
//             </tbody>
//             <tbody>
//             {vehicleArr.map((item)=>(
//                 // if({item.compType}=="E")
//                 <tr key={item.configId}>
//                     <td>{item.modelName}</td>
//                     <td>{item.compName}</td>
//                     <td>{item.compType}</td>  
//                 </tr>
//         ))}
//             </tbody>
//         </table> */}
           
//         {/* if(vehicleArr.compType) */}
//     </div>
//   );
// }