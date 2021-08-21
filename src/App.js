import React, { Component } from "react";
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode:"welcome",
      welcome:{title:"welcome",sub:"집으로 돌아온 걸 칭찬해"},
      subject: { self: "안녕,난 뮨이야," },
      content: { name: "문정" },
      toc:[
        {id:1, title:'먕', desc:'고양이다냥'},
        {id:2, title:'믹', desc:'미이이익'},
        {id:3, title:'시잉',desc:'시이이이잉'},
        {id:4, title:'고', desc:'드가즈아'}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>😉안녕,뮨.</h1>
        <Subject self={this.state.subject.self}></Subject>
        <Toc link={this.state.toc}></Toc>
        <Content name={this.state.content.name}></Content>
      </div>
    );
  }
}
export default App;
