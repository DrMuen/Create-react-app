import React,{ Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';
import './App.css';
 

class App extends Component{
  render(){
   return (
   <div className="App">
      <h1>😉안녕,뮨.</h1>
      <Subject self="저기,"></Subject>
      <Toc></Toc>
      <Content></Content>
    </div>
   )
}
}
export default App;
