import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc,
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(sexyBoy){
    this.setState({[sexyBoy.target.name]:sexyBoy.target.value})
  }
  
  render() {
    console.log(this.props.data.title);
    console.log(this.state.title)
    console.log(this.state)
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={(berry) => {
            berry.preventDefault();
            this.props.onSubmit(
              berry.target.title.value,
              berry.target.desc.value,
            );
          }}
        >
          <p>
            <input type="text" name="title" placeholder="Miiien" value={this.state.title} onChange={this.inputFormHandler}></input>
          </p>
          <p>
            <textarea
              desc="desc"
              name="desc"
              placeholder="SHaween"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="눌러ㅓㅓㅓㅓㅓㅓ"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
