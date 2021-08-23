import React,{Component} from'react';

class ReadContent extends Component{
    render(){
      return(
        <article>
        <h2>{this.props.title}</h2>
        <div>{this.props.desc}☺️</div>
    </article>
      )
    }
  }
  
  export default ReadContent;