/*import React, {useState,useEffect} from "react";


function StateHook() {
 const [Data , SetData] = useState(0) ; 
 const [Data1 , SetData1] = useState(0) ; 
  function Increase (){
    SetData(Data + 1) ; 
  }
  function Decrease() {
    SetData(Data-1)
  }
  function Increase2() {
    SetData1(Data+2)
  }

useEffect( () => {
    console.log('hii welcome');
   },[])
  return (
    <div>
      <h1>Welcome your score {Data}</h1>
      <h2>If you know your score ! </h2>
      <button onClick = {Increase}>Press me</button>
      <button onClick = {Decrease}>Delete me</button>
      <button onClick = {Increase2}>New one</button>
  
   </div>
  );
}
export default StateHook;
//<button onClick = {Increase2}>New one</button>*/

import React from 'react';
class click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0 };
  }
   
  //onSubmit(){
   // this.setState({count : this.state.count+1});
  //}
  compoundDidMount(){
    console.log("hlllloooo")
  }

  render() {
    return (
      <div>
        <h1>Welcome your score {this.state.count}</h1>
        <h2>If you know your score !</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Press me</button>
        <button onClick = {this.compoundDidMount.bind(this)}>hi</button>
      </div>
    );
  }
}
export default click;

