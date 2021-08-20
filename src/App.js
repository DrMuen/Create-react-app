import { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
    <header>
      <h2>저기,</h2>
     <h3>나는 뮨이야☺️</h3>
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
      <Subject></Subject>
      <Toc></Toc>
      <Content></Content>
    </div>
   )
}
}
export default App;
