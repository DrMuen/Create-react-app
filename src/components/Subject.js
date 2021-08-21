import React,{ Component } from 'react';

function Welcome(props){
    return <h2>나는 {props.name}</h2>;
  }
  
  class Subject extends Component{
    render(){
      return(
      <header>
         <h2>{this.props.self}</h2>
        <Welcome name="뮨이야⭐️"></Welcome>
      </header>
      )
    }
  }
  export default Subject;