import React, { Component } from "react";

class UpdateContent extends Component {
  render() {
    console.log(this.props.data);
        return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit = {(berry) => {berry.preventDefault();
                                  this.props.onSubmit(
                                      berry.target.title.value,
                                      berry.target.textContent.value
                                  );
                                }}
          
        >
          <p><input type="text" name="title" placeholder="Miiien "></input></p>
          <p><textarea desc="desc" name="textContent" placeholder="SHaween"></textarea></p>
          <p><input type="submit" value="눌러ㅓㅓㅓㅓㅓㅓ"></input></p>
        </form> 

      </article>
    );
  }
}

export default UpdateContent;
