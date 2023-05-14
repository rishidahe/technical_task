import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from 'axios';

export function InvoicePage(){
    const [compArr,setCompArr]=useState([]);
    const currentDate = new Date().toLocaleDateString();
    const model = JSON.parse(sessionStorage.getItem("getConf"))
    console.log('modelInvoice')
    console.log(model)
    const stanChange = JSON.parse(sessionStorage.getItem("stanChange"))
    console.log('stanChange')
    // const altComp=stanChange.map()
    console.log(stanChange)
    
  //  const result = model.map((num) => {     
  //   return stanChange.filter((elem) => (num.compId==elem.data))   });
  //   console.log("result")
  //   console.log(result)
    // const compId = model.map(obj=>obj.compId)
    // console.log("compId");
    // console.log(compId);
    // useEffect(()=>{
    //   model=[...model,stanChange]
    //   console.log("model")
    //   console.log(model)
    // })
    // const vehListCType=JSON.parse(sessionStorage.getItem("vehListCType"));
    // console.log("Session vehListCType");
    // console.log(JSON.parse(sessionStorage.getItem("vehListCType")))
    // const vehListSType=JSON.parse(sessionStorage.getItem("vehListSType"));
    console.log("Session vehListIType");
    console.log(JSON.parse(sessionStorage.getItem("vehListIType")))
    let [vehname]=model;
    const modelName = vehname?.modelName;
    const modelPrice= vehname?.modelPrice;
    console.log("modelName")
    console.log(modelName)

    const minQty=sessionStorage.getItem("minQty");
    useEffect(() => {
      axios.get('http://localhost:8080/api/components')
        .then(response => {
          setCompArr(response.data);
          console.log("comp Fetch");
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return(
        <div>
            <MDBContainer className="py-5">
      <MDBCard>
        <MDBCardHeader className="bg-dark"> </MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol xl="12">
                <MDBIcon
                  far
                //   icon="building"
                  color="danger"
                  size="6x"
                  className="float-start"
                />
                <MDBTypography listUnStyled className="float-end">
                  <li style={{ fontSize: "20px", color: "red" }}>Vehicle Configurator Company</li>
                  <li>123, Mumbai</li>
                  <li>123-456-789</li>
                  <li>vconf@mail.com</li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
              <h3
                className="text-uppercase text-center mt-3"
                style={{ fontSize: "40px" }}
              >
                Invoice
              </h3>
              <p>Invoice Id : {Math.round( Math.random()*10000)}</p>
            </MDBRow>
            <MDBRow className="mx-3">
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Components</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>{modelName}</td><td></td>
                    <td>{minQty}</td>
                    <td>
                      <MDBIcon fas icon="rupee-sign" /> {modelPrice}
                    </td>
                  </tr>
                  <tr align="left"><td></td>
                    <b>Core Features</b></tr>
                  
                      {JSON.parse(sessionStorage.getItem("vehListCType")).map((item) => (
                          <tr align="left"><td></td> {item}</tr>
                      ))}
                      <tr align="left"><td></td>
                    <b>Standard Features</b></tr>
                  
                      {JSON.parse(sessionStorage.getItem("vehListSType")).map((item) => (
                          <tr align="left"><td></td> {item}</tr>
                      ))}
                      <tr align="left"><td></td>
                    <b>Interior Features</b></tr>
                  
                      {JSON.parse(sessionStorage.getItem("vehListIType")).map((item) => (
                          <tr align="left"><td></td> {item}</tr>
                      ))}
                      <tr align="left"><td></td>
                    <b>Exterior Features</b></tr>
                  
                      {JSON.parse(sessionStorage.getItem("vehListEType")).map((item) => (
                          <tr align="left"><td></td> {item}</tr>
                      ))}
              
                  {/* <tr>
                    <td>Alloy Steel wheels</td>
                    <td>1</td>
                    <td>
                      <MDBIcon fas icon="rupee-sign" /> 1300,00
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>Disc Brakes</td>
                    <td>1</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 300,00
                    </td>
                  </tr>
                  <tr>
                    <td>Panaromic sunroof</td>
                    <td>1</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 500,00
                    </td>
                  </tr> */}
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
            <MDBRow >
              <MDBCol xl="8">
                <MDBTypography listUnStyled className="float-end me-0">
                  <li>
                    <span className="me-3 float-start"> Amount:</span>
                    <MDBIcon fas icon="rupee-sign" /> {modelPrice}
                  </li>
                  <li>
                    <span className="me-5">Taxes:</span>
                    <MDBIcon fas icon="rupee-sign" /> {modelPrice*minQty * 0.12}
                  </li>
                  <li>
                    <span
                      className="float-start"
                      style={{ marginRight: "20px" }}
                    >
                      Total Amount:
                    </span>
                    <MDBIcon fas icon="rupee-sign" /> {(modelPrice*minQty) + (modelPrice*minQty * 0.12)}
                  </li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol xl="8" style={{ marginLeft: "20px" }}>
                <p
                  className="float-end"
                  style={{
                    fontSize: "30px",
                    color: "red",
                    fontWeight: "400",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  Total:
                  <span>
                    <MDBIcon fas icon="rupee-sign" className="ms-2" /> {(modelPrice*minQty) + (modelPrice*minQty * 0.12)}
                  </span>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2 mb-5">
              <p className="fw-bold">
                Date: <span className="text-muted">{currentDate}</span>
              </p>
              <p className="fw-bold mt-3">Signature:</p>
            </MDBRow>
          </MDBContainer>
          <button type="button" class="btn btn-info " onClick={window.print}>Print</button>
        </MDBCardBody>
        <MDBCardFooter className="bg-dark"></MDBCardFooter>
      </MDBCard>
    </MDBContainer>

{/* <input size="100" type="button" value="Print" onClick={window.print}></input> */}
        </div>
    )
}