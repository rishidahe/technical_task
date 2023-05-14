import React from 'react';
// import LoginImage from  './C:/Users/Rohit/Desktop/VitaFoundation/PROJECT/.NET main project/React/vehicleconfigreact/src/modern-digital-smart-car-interface_117023-509.jpg';

import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login() {
  const regex1= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex2=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const [credential, setCredential] = useState({});
  const [error1,setError1]=useState('');
  const [error2,setError2]=useState('');
 
  //const { code } = useParams();
   let navigate = useNavigate();
    const handleChange = (event) => {
     const name = event.target.name;
      const value = event.target.value;
      // if(regex1.test(value)===false || regex2.test(value)===false)
      // {
      //   console.log("in handlchang")
      //   setError1('Please Enter Valid Email Id or password');
      //   //setCredential(values => ({ ...values, [name]: value }))
      //   //console.log(credential)

        
      // }
      // else
      // {
      //   setError1(' ');
      //   console.log("in handlchang correct")
      //   setCredential(values => ({ ...values, [name]: value }))
      //   //setCredential(values => ({ ...values, [name]: value }))
      //   console.log(credential)
      //   return true;
      // }

      if (name === 'emailId') {
        if (regex1.test(value) === false) {
          setError1('Please enter a valid email address');
          return false;
        } else {
          setError1('');
        }
      } else if (name === 'password') {
        if (regex2.test(value) === false) {
          setError2('Please enter a valid password (6-16 characters)');
          return false;
        } else {
          setError2('');
        }
      }
      setCredential(values => ({ ...values, [name]: value }));
      return true;
      }

      
      const handleSubmit = (e) => {
        console.log("hello");
        console.log("credential");
        console.log(credential);
      let demo = JSON.stringify(credential);
      console.log(JSON.parse(demo)); 
      fetch("http://localhost:8080/api/login/" , {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo
      }).then((response) => response.json())
      .then((data) => {
        console.log("hello");
        console.log(data);

        if(data.success)
        {
           navigate('SegmentPage')
          // alert("registered");
        }
        else
        {
          alert("Enter Valid Creadential");
         // Navigate('Registartion');
        }
        
     });


      e.preventDefault();
      // navigate('/App');
      //alert(credential);

       
    
       
        
    }

    // const val=""
  return (
    <MDBContainer className="my-5" >

      <MDBCard style={{width:'800px', height:'500px'}} >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
          <MDBCardImage src='public/images/car_img_2.jpg' alt="login form" className='rounded-start w-100'  style={{ width: '200px', height: '499px' }}/>

          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="car fa-3x me-3" className='mb-2' style={{ color: '#ff6219' }}/>
                {/* <MDBIcon fas icon="car" /> */}
                {/* <span className="h1 fw-bold mb-0" align='center'>Logo</span> */}
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login Here</h5>

                <MDBInput wrapperClass='mb-4' label='Email ID' id='formControlLg' type='email' name='emailId' size="lg" placeholder="Email ID" style={{width:'300px', height:'20px'}} onChange={handleChange}/>
                <p><b>{error1}</b></p>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg1' type='password' size="lg" name='password' placeholder="Password" style={{width:'300px', height:'20px'}} onChange={handleChange}/>
                <p><b>{error2}</b></p>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'  style={{width:'300px'}} onClick={handleSubmit}>Login</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/Registration/" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;