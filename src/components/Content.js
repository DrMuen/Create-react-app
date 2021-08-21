import React,{Component} from'react';

class Content extends Component{
    render(){
      return(
        <article>
        <div>😔{this.props.name}이는 외롭다.</div>
    </article>
      )
    }
  }
  
  export default Content;