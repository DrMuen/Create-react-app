import React, { Component } from "react";
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 4;
    this.state = { 
      max_content_id : 4,
      mode: "welcome",
      selected_content_id: 1,
      welcome: { title: "welcome", desc: "집으로 돌아온 걸 칭찬해" },
      subject: { self: "안녕,난 뮨이야," },
      content: { name: "문정" },
      toc: [
        { id: 1, title: "양아지", desc: "고양이다냥" },
        { id: 2, title: "꽃핀", desc: "미이이익" },
        { id: 3, title: "탬탬버린", desc: "시이이이잉" },
        { id: 4, title: "애덕", desc: "드가즈아" },
      ],
    };
  }
    getReadContent(){
      var i = 0;
      while (i < this.state.toc.length) {
        var data = this.state.toc[i]
        if (this.state.toc[i].id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
    }
    getContent(){
      var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article =<ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "read") {
       var _content=this.getReadContent()
      _article =<ReadContent title={_content.title} desc={_content.desc}></ReadContent> 
    }else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={(_title,_desc)=>{this.max_content_id = this.max_content_id + 1;
                                                           var _toc = this.state.toc.concat(
                                                           {id:this.max_content_id,title:_title,desc:_desc})
                                                           this.setState({toc:_toc,
                                                                          mode:'read',
                                                                          selected_content_id:this.max_content_id,
                                                          })}}></CreateContent>
  }else if(this.state.mode === "update"){
    var _contents = this.getReadContent();
    _article = <UpdateContent data={_contents} onSubmit={(_id,_title,_desc)=>{
      var _tocs = Array.from(this.state.toc)
      var i = 0
      while(i < _tocs.length){
        if(_tocs[i].id === _id){
          _tocs[i] = { id:_id, title:_title, desc:_desc};  
          break;
         }
         i = i + 1;
      }
      this.setState({toc:_tocs,
                     mode:"read",
      })}}></UpdateContent>
  }
    return _article;
    }


  render() {  
    return (
      <div className="App">
        <h1>😉안녕,뮨.</h1>
        <Subject
          self={this.state.subject.self}
          onChangePage={(sexy) => {
            this.setState({ mode: sexy });
          }}
        ></Subject>
        <Toc
          data={this.state.toc}
          onChangePage={(id) => { 
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }}
        ></Toc>
        <Control onChangeMode={function(_mode){
          if(_mode ==='delete'){
            if(window.confirm('really?')){
              var i = 0;
              while(i < this.state.toc.length){
                var _toc = Array.from(this.state.toc);
                if(_toc[i].id === this.state.selected_content_id){
                  _toc.splice(i,1);
                  break; 
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                toc:_toc,
              })
              alert('delete')
            }
          }else{this.setState({mode: _mode})}
        }.bind(this)}></Control>
        {/* <ReadContent name={_title} desc={_desc}></ReadContent> */}
        {this.getContent()}
      </div>
    )
  }
}
export default App;
