import React, { Component } from "react";
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode:"read",
      welcome:{title:"welcome",desc:"집으로 돌아온 걸 칭찬해"},
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
    console.log(1);
      var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode=== "read"){
      _title = this.state.toc[0].title;
      _desc = this.state.toc[0].desc;
    };
    console.log('즐겁다',this);
    return (
      <div className="App">
        <h1>😉안녕,뮨.</h1>
        <Subject self={this.state.subject.self}
        onChangePage = {(sexy) => {
          this.setState({mode : sexy})  
        }}
        ></Subject>
        <Toc link={this.state.toc}></Toc>
        <Content name={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;
