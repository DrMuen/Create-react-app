import React,{Component} from'react';

class Toc extends Component{
    render(){
      console.log(3);
      var list = [];
      var link = this.props.link;
      let i = 0;
      while(i < link.length){
        list.push(<li key={link[i].id}><a href={"/content/" + link[i].id}>{link[i].title}</a></li>)
        i = i + 1;
      }
      return(
        <nav>
      <ul>
         {list}
      </ul>
    </nav>
      )
    }
  }

  export  default Toc;