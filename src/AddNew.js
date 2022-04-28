import React, { Component } from 'react'
import { Add} from './ui-components';
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
//import {AmplifyProvider} from "@aws-amplify/ui-react"
                                     
class AddNew extends Component {
    render(){
        return (<AddNewF />);
    }
}

  function AddNewF() {
    return (
      <div>

          <h1> Input Data</h1>
          <Add style ={{textAlign: "left"}} />

      </div>
     

);
}

export default AddNew








