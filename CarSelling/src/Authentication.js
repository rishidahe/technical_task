import React from "react";
import { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form,Image } from 'react-bootstrap';
//import App from "./App";
export default function Authentication()
{
    
    const [user, setUser] = useState({});
  //  //const { code } = useParams();
     let navigate = useNavigate();
    const handleChange = (event) => {
     const name = event.target.name;
      const value = event.target.value;
       setUser(values => ({ ...values, [name]: value }))
      }
      const handleSubmit = (e) => {
      let demo = JSON.stringify(user);
      console.log(JSON.parse(demo)); // https://localhost:7294/api/Authentications
      //https://localhost:7294/api/Authentications/
      fetch("http://localhost:8080/api/authentication" , {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo
      }).then(r => { console.log(r.json()) })
      e.preventDefault();
      navigate('/Home');
      alert(user);
    }

 return (
    
      <Container>
      
        <Row className="vh-100 d-flex justify-content-left align-items-left">
        

          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Vehicle Configurator   
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label className="text-center"><b>Company Name</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Name " name="companyName"  onChange={handleChange}/>
                      </Form.Group>
                     
                     <Form.Group className="mb-3" controlId="companyRegNo">
                        <Form.Label className="text-center">Company Registration No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Registration No. " name="companyRegNo" onChange={handleChange}/>
                      </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="text" >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
                      </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="phoneNo">
                        <Form.Label className="text-center">Phone No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone No "  name="phoneNo" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="emailId">
                        <Form.Label className="text-center">
                          Email Id
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="emailId" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label className="text-center">Company Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Address "  name="address" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="password"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">  <input type="submit" placeholder="Submit"/>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="SignIn" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
  );
}
//export default Registration;