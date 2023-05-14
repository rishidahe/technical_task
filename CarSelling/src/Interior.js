import { Link,useNavigate,useLocation, json } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { useState,useEffect } from "react";
import axios from 'axios';
import { ConfFooter } from "./confFooter";

export function Interior(){
    console.log("Session data")
    console.log(JSON.parse(sessionStorage.getItem("getConf")))
    const [selectedOpt1, setSelectedOpt1] = useState('');
    const handleOption1Change = (event) => {
      setSelectedOpt1(event.target.value);
      console.log("options")
      console.log(event.target.value)
    }
      const [altCompArr, setAltCompArr]=useState([]);
      const [altCompArr1, setAltCompArr1]=useState([]);
      console.log('altCompArr1');
      console.log(altCompArr1);
      const[compArr, setCompArr]=useState([]);
      // console.log('compArr');
      // console.log(compArr);
      const location = useLocation();
      // console.log(location.state.name)
      // const model=location.state.name;
      const model = JSON.parse(sessionStorage.getItem("getConf"))
      console.log('model')
      console.log(model)
      const vehListCType = model.filter(obj=> obj.compType=='C').map(obj=>obj.compName)
      // console.log(vehListCType)
      const vehListIType = model.filter(obj=> obj.compType=='I').map(obj=>obj)
      console.log('vehListIType')
      console.log(vehListIType)
      const vehListSTypeConf = vehListIType.filter(obj=> obj.isConfigrable=='Y')
    //  console.log('vehListSTypeConf')
    //   console.log(vehListSTypeConf);
      const modelid=model[0].modelId;
      // console.log('modelId')
      // console.log(model[0].modelId);
      const compid=vehListSTypeConf.map(obj=>obj.compId)
      console.log('compid')
      console.log(compid);
      // const result=compid.map((val,key)=>{
      //   const options=altCompArr.filter((val2) => (val==val2.compId))
      // })
      const altcompid = altCompArr.map((obj)=>{
        return vehListSTypeConf.filter(obj1=>obj1.compId==obj1.compId)
      });
     console.log('altcompid') 
     console.log(altcompid);
  
     const result = vehListSTypeConf.map((num) => {     
        return altCompArr.filter((elem) => (num.compId==elem.compId))   });
    // const result = vehListSTypeConf.map((num) => {     
    //   return compArr.map((elem) =>{
    //     return altCompArr.filter((elem1)=>num.compId==elem1.compId)})  });
        console.log('result')
      console.log(result);
      const sample=result.map((obj)=>{
        return compArr.filter(obj1=>(obj.altCompId==obj1.compId))
      }
      )
      console.log('sample')
      console.log(sample);
      const result2=  vehListSTypeConf.map((compelem)=>{
        return altCompArr.filter((elem) => (compelem.compId==elem.altCompId))
      })
      console.log('result2')
      console.log(result2);
      const result3=  result.map((compelem)=>{
        return compArr.filter((elem) => (compelem.altCompId==elem.compId))
      })
      console.log('result3')
      console.log(result3);
      const dropdowns = vehListSTypeConf.map((num, index) => {     
        const matchingElements = result[index];     
        const options = matchingElements.map((elem) => (      
           <option value={elem.deltaPrice} key={elem.altId} >         {elem.altCompId}       </option>     ));  
               return (       <div key={num.compId}>      
                  <label htmlFor={`${num.compName}`}>{`${num.compName}:`}</label>     
                      <select id={`${num.compName}`} onChange={handleOption1Change}>{options}</select>       </div>     );   }); 
  
      //(elem.compId).toString().startsWith(num.toString()));
      // const finalArr = [];
      // altComp.forEach(
      //   (obj1)=>compid.forEach(
      //     (obj2)=>{
      //       if(obj1.compId==obj2.compId)
      //       {finalArr.push(obj1)}
      //     }
      //   )
      // )
      // console.log("finalArr")
      // console.log(finalArr)
      // let i=0;
      // const meth= sam(()=>
      // i+=1;
      // )
      // const sample= altComp.filter(obj=>obj.compId==compid[i+1])
      // console.log('sample')
      // console.log(sample);
      useEffect(() => {
      
          axios.get('https://localhost:44313/api/AlternateComponentMasters/'+modelid)
            .then(response => {
              setAltCompArr(response.data);
              console.log("AltFetch")
              console.log(response.data)
            })
            .catch(error => {
              console.log(error);
            });
        }, []);
        useEffect(() => {
      
          axios.get('https://localhost:44313/api/AlternateComponentMasters/')
            .then(response => {
              setAltCompArr1(response.data);
              console.log("AltFetch")
              console.log(response.data)
            })
            .catch(error => {
              console.log(error);
            });
        }, []);
        useEffect(() => {
      
          axios.get('https://localhost:44313/api/ComponentMasters')
            .then(response => {
              setCompArr(response.data);
              console.log("CompFetch")
              console.log(response.data)
            })
            .catch(error => {
              console.log(error);
            });
        }, []);
      return(
          <div>
              <label><b>Core Feature</b></label>
          <ul>
          {vehListCType.map((item,key)=>(
                      <li key={key}>{item}</li>
                  ))}
                  </ul>
        <Form.Label><b>Interior Feature</b></Form.Label>
        {/* <Form.Select >
        <option>Select</option>
        {vehListSTypeConf.map((item,key)=>(
             
              <option key={key}>{item.compName}</option>
          ))}
  
        </Form.Select> */}
        {dropdowns}
  <ConfFooter/>
        
          </div>
  
      )
   
}