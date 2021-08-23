import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form>
          <div><input type="text" placeholder="Miiien "></input></div>
          <div><input type="text" placeholder="SHaween"></input></div>
          <button type="submit" onClick={(apple) => {apple.preventDefault()}}>눌러ㅓㅓㅓㅓㅓㅓ</button>
        </form> 

      </article>
    );
  }
}

export default CreateContent;
