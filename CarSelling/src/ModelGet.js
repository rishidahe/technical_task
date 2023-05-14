import React, { useEffect, useState } from "react";

// export class ModelMasterGet extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         Model_arr: []
//       };
//     }
function ModelMasterGet(props) {
  const [Model_arr, setModels] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7134/api/ModelMasterAssignments/")
      .then(res => res.json())
      .then((result) => { setModels(result); }
      );
    //   (result) => { 
    //     this.setState({ 
    //       Model_arr: result 
    // });
  }, []);

  return (
    <div>
      <h1 align="center">Model Details</h1>
      <table align="center" >
        <thead>
          <tr>
            <th>Model Id</th>
            <th>Model Name</th>
            <th>Minimum Quantity</th>
            <th>Model Price</th>
            <th>Image Path</th>
            <th colSpan={3}>CRUD Opetation</th>
          </tr>
        </thead>
        <tbody align="center">
          {Model_arr.map((mod, i) => (
            <tr key={i + 1}>
              <td>{mod.modeId}</td>
              <td>{mod.modelName} </td>
              <td>{mod.minQty} </td>
              <td>{mod.modelPrice} </td>
              <td>{mod.imagePath} </td>
              <td> <a href={'/' + mod.modeId}>display</a></td>
              <td> <a href={'/modeledit/' + mod.modeId}>Edit</a></td>
              <td> <a href={'/modeldel/' + mod.modeId}>delete</a></td>
             {/* <td> {console.log(mod.modeId)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


}
export default ModelMasterGet;