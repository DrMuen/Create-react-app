import React,{ Component } from 'react';
  
  class Subject extends Component{
    render(){
      return(
      <header>
         <h2><a href="/" onClick={(sexy) =>{
           sexy.preventDefault();
           this.props.onChangePage('welcome');
         } 
           }>{this.props.self}</a></h2>
      </header>
      )
    }
  }
  
  export default Subject;