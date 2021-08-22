import React, { Component } from "react";

class Toc extends Component {
  render() {
    var list = [];
    var link = this.props.link;
    let i = 0;
    while (i < link.length) {
      list.push(
        <li key={link[i].id}>
          <a
            href={"/content/" + link[i].id}
            onClick={(sexy) => {
              sexy.preventDefault();
              this.props.onChangePage();
            }}
          >
            {link[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default Toc;
