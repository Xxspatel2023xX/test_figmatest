import React, { Component } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddNew from './AddNew'
import {Add} from './ui-components';
//import { withAuthenticator } from '@aws-amplify/ui-react';



class App extends Component {
  render() {
     return (
        <div className="App">
          {/* <Routes>
            <Route exact path='/addpage' element={<AddNew/>} />
          </Routes> */}
<Add/>
        </div> 
    );
}
}

export default App;


/*function App() {
return (
<AmplifyProvider>

<div className="App">
<h1>Add</h1>
<p>
<Add/>
</p>
<h1>WelcomeScreenHW</h1>
<p>
<WelcomeScreenHW />
</p>
<h1>QuestionDisplayCollection</h1>
<p>
<QuestionDisplayCollection />
</p>

</div>
</AmplifyProvider>
 
);
}

export default App;

*/
