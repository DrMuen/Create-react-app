import React,{Component} from'react';

class Content extends Component{
    render(){
      return(
        <article>
        <h2>{this.props.name}</h2>
        <div>{this.props.desc}☺️</div>
    </article>
      )
    }
  }
  
  export default Content;