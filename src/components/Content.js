import React,{Component} from'react';

class Content extends Component{
    render(){
      console.log(4)
      return(
        <article>
        <h2>{this.props.name}</h2>
        <div>{this.props.desc}☺️</div>
    </article>
      )
    }
  }
  
  export default Content;