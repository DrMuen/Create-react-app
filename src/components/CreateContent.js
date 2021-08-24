import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
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

export default CreateContent;
