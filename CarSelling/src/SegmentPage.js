// import React, { useEffect, useState } from "react";

// export function SegmentPage(){
//     const [Segment_arr, setSegment] = useState([]);
//   useEffect(() => {
//     fetch("https://localhost:7148/api/SegmentMasters/")
//       .then(res => res.json())
//       .then((result) => { setSegment(result); }
//       ); }, []);
//       let segList=Segment_arr.length>0 &&  Segment_arr.map((item)=>{
//         return (
//             <option key={item.segId} value={item.segId}>{item.segName}</option>
//           )
//       }
//       )
      
//       const[selectedSeg , setSelectedSeg] =useState({});

//     return(
//         <div>
//              <select>
//                 {segList}
//              </select>
//         </div>
//     );
// }

import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Col, Row} from 'react-bootstrap';  
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';


export function SegmentPage() {
  const [vehicleArr, setVehicleArr] = useState([]);
  const [segMasterArr, setSegMasterArr] = useState([]);
  const [mfgMaseterArr, setMfgMaseterArr] = useState([]);
  const [modelMasterArr, setModelMasterArr] = useState([]);
  const [selectedOpt1, setSelectedOpt1] = useState('');
  const [selectedOpt2, setSelectedOpt2] = useState('');
  const [selectedOpt3, setSelectedOpt3] = useState('');
  const [minQty,setMinQty]=useState('');
  const navigate = useNavigate();
  let[minQtyArr]=modelMasterArr;
  console.log("minQty")
  console.log(minQty)
  useEffect(() => {
    //http://localhost:8080/api/segments
    //axios.get('https://localhost:44313/api/SegmentMasters')
    axios.get('http://localhost:8080/api/segments')
      .then(response => {
        setSegMasterArr(response.data);
        console.log("segment Fetch");
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedOpt1) {
      //axios.get("https://localhost:44313/api/MfgMasters/"+selectedOpt1)
      axios.get("http://localhost:8080/api/mfgById/"+selectedOpt1)
        .then(response => {
          setMfgMaseterArr(response.data); 
          console.log("Mfg Fetch");
          console.log(response.data);
               })
        .catch(error => {
          console.log(error);
        });
    }
  }, [selectedOpt1]);

  useEffect(() => {
    if (selectedOpt2) {
      // axios.get("https://localhost:44313/api/ModelMasters/"+selectedOpt2)
      axios.get("http://localhost:8080/api/Models/"+selectedOpt2)
        .then(response => {
          setModelMasterArr(response.data); 
          console.log("Model Fetch");
        console.log(response.data); 
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [selectedOpt2]);

  const handleOption1Change = (event) => {
    setSelectedOpt1(event.target.value);
  }
  const handleOption2Change = (event) => {
    setSelectedOpt2(event.target.value);}

    const handleOption3Change = (event) => {
        setSelectedOpt3(event.target.value);
        setMinQty(minQtyArr?.minqty);
      }
      const handleOnChangeMinQty=(event)=>{
        setMinQty(event.target.value);
      }
    //
      // const confPageSession = JSON.stringify(vehicleArr);
    // sessionStorage.setItem("getConf",confPageSession);
    const minQ= minQty;
    sessionStorage.setItem("minQty",minQ);
    
    const handleSubmit = event => {
        event.preventDefault();

        console.log(selectedOpt3);
        // 👇️ redirect to /contacts
        // +{state:{id:1,name:selectedOpt3}}
        navigate('/DefaultConfPage/',{state:{id:1,name:selectedOpt3}});
      };
      const modelIdSession = selectedOpt3;
    sessionStorage.setItem("modelIdSession",modelIdSession);

    useEffect(() => {
    
      // axios.get('https://localhost:44313/api/VehicleMasters/'+selectedOpt3)
      axios.get('http://localhost:8080/api/vehicles/'+selectedOpt3)
        .then(response => {
          setVehicleArr(response.data);
          console.log("modelData")
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
    <>
    <Container className="pos">
    <Row>
   <Col md={{ span: 6, offset: 3 }}>
    <Form.Label>
      <label>
      <h3><b><u>Segment Page</u></b></h3>
      </label>
    </Form.Label>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label><b>Select Segment</b></Form.Label>
      <Form.Select value={selectedOpt1} onChange={handleOption1Change}>
        <option>Select</option>
        {segMasterArr.map(item=>(
            <option key={item.segId} value={item.segId}>{item.segName}</option>
        ))}
        
      </Form.Select>
      <Form.Label><b>Select Manufacture</b></Form.Label>
      <Form.Select value={selectedOpt2} onChange={handleOption2Change}>
      <option>Select</option>
      {mfgMaseterArr.map(item=>(
           
            <option key={item.mfgId} value={item.mfgId}>{item.mfgName}</option>
        ))}

      </Form.Select> 
      <Form.Label><b>Select Model</b></Form.Label>
      <Form.Select value={selectedOpt3} onChange={handleOption3Change}>
      <option>Select</option>
      {modelMasterArr.map(item=>(
            <option key={item.modelId} value={item.modelId}>{item.modelname}</option>
        ))}
         console.log(selectedOpt3);
        </Form.Select>
        {/* <Form.Label><b>Minium Quantity</b></Form.Label>
        <input type="text" value=""/> */}
        <Form.Label><b>Quantity </b></Form.Label>
            <input name="minQty" value={minQty} onChange={val => handleOnChangeMinQty(val)}/>
    </Form.Group>
   
    <button type="submit" >Submit</button>
    </Form>
    </Col>
    </Row>
    </Container>
  </> 
     );
}
