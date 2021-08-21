import { Component } from 'react';
import './App.css';

function Welcome(props){
  return <h2>나는 {props.name}</h2>;
}


class Subject extends Component{
  render(){
    return(
    <header>
       <h2>{this.props.self}</h2>
      <Welcome name="뮨이야☺"></Welcome>
    </header>
    )
  }
}


class Toc extends Component{
  render(){
    return(
      <nav>
    <ul>
      <li>
        <a href="">먕</a>
      </li>
      <li>
        <a href="">믹</a>
      </li>
      <li>
        <a href="">시잉</a>
      </li>
      <li>
        <a href="">고</a>
      </li>
    </ul>
  </nav>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <article>
      <div>😔문정이는 외롭다.</div>
  </article>
    )
  }
}

class App extends Component{
  render(){
   return (
   <div className="App">
      <h1>😉안녕,뮨.</h1>
      <Subject self="저기," welcome="저기,"></Subject>
      <Toc></Toc>
      <Content></Content>
    </div>
   )
}
}
export default App;
